import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

import * as firebase from 'firebase';
import { DEFAULT_AVATAR, EMAIL_VERIFICATION_ENABLED } from 'src/environments/environment.prod';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private facebook: Facebook,
    private commonService: CommonService,
    private navController: NavController
  ) { }

  getUserData(): Promise<firebase.User> {
    return this.afAuth.currentUser;
  }

  getUser(id) {
    return this.db.object('users/' + id);
  }

  login(email, pass) {
    return this.afAuth.signInWithEmailAndPassword(email, pass);
  }

  loginFacebook(facebookLoginResponse): Promise<firebase.auth.UserCredential> {
    const facebookCredential = firebase.auth.FacebookAuthProvider.credential(facebookLoginResponse.authResponse.accessToken);
    console.log("Obtiene facebook Crdencial", facebookCredential);

    return this.afAuth.signInWithCredential(facebookCredential);
  }

  resetPassword(email) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  sendVerificationEmail(email?: string) {
    return this.getUserData().then(
      currentUser => {
        return currentUser.sendEmailVerification()
      }
    ).catch(error => {
      console.error("error en sendVerification", error)
    })
  }

  logout() {
    return this.afAuth.signOut();
  }

  register(user: any) {
    return Observable.create(observer => {
      this.afAuth.createUserWithEmailAndPassword(user.correo, user.contrasenna).then((authData: any) => {
        let userInfo: any = {
          uid: authData.user.uid,
          nombres: user.nombres,
          apellidos: user.apellidos,
          celular: user.celular,
          correo: user.correo,
          contrasenna: user.contrasenna,
          emailVerified: false,
          createdAt: Date.now()
        };

        if (EMAIL_VERIFICATION_ENABLED === true)
          this.sendVerificationEmail();
        this.updateUserProfile(userInfo);
        observer.next();

      }).catch((error: any) => {
        if (error) {
          console.error("Error", error)
          observer.error(error);
        }
      });
    });
  }

  registerFacebook(): Observable<any> {
    return Observable.create(observer => {
      this.authFacebook().then((res: FacebookLoginResponse) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        this.afAuth.signInAndRetrieveDataWithCredential(facebookCredential).then(
          (authData: any) => {
            console.log("Este es el auth que recibo cuando me registro con con facebook", authData);
            if (authData.additionalUserInfo.isNewUser) {
              let userInfo: any = {
                uid: authData.user.uid,
                name: authData.user.providerData[0].displayName,
                phoneNumber: '',
                isPhoneVerified: false,
                codeRefence: '',
                facebook: true,
                photoURL: authData.user.providerData[0].photoURL,
                email: authData.user.email,
                createdAt: Date.now()
              };
              this.updateUserProfile(userInfo);
              observer.next();
            } else {
              this.loginFacebook(res).then(
                async res => {
                  let user = await this.getUserData();
                  if (user.phoneNumber) {
                    this.navController.navigateRoot(['/home'])
                  } else {
                    this.navController.navigateForward(['/phone-number'])
                  }
                }, error => { console.error(error); }
              )
            }

          },
          error => {
            console.error("Imprimiendo error. error", error);
            if (error == "auth/email-already-in-use") {
              console.log("Ingresa con error auth/email-already-in-use");
              this.loginFacebook(res);
            }
            else {
              console.log("Ingresa por el else");
              observer.error(error);
            }
          }
        );
      }).catch((error: any) => {
        if (error) {
          observer.error(error);
        }
      });
    });
  }

  authFacebook(): Promise<FacebookLoginResponse> {
    return this.facebook.login(['email']);
  }

  updateUserProfile(user) {
    console.log(user);
    let nombres = user.nombres ? user.nombres : user.email;
    let photoUrl = user.photoURL ? user.photoURL : DEFAULT_AVATAR;

    this.getUserData().then(
      currentUser => {
        currentUser.updateProfile({
          displayName: name,
          photoURL: photoUrl
        });
      }
    ).catch(error => {
      console.error("error en register updateProfile", error)
    })

    this.db.object('users/' + user.uid).update({
      nombres: user.nombres,
      photoURL: photoUrl,
      apellidos: user.apellidos,
      celular: user.celular,
      correo: user.correo,
      contrasenna: user.contrasenna,
      creado: user.createdAt,
      isPhoneVerified: false,
      emailVerified: user.emailVerified,
      facebook: false
    })
  }

  updatePhone(phoneNumber: number, isPhoneVerified: boolean) {
    this.getUserData().then(
      user => {
        this.db.object('users/' + user.uid).update({
          phoneNumber: phoneNumber,
          codeRefence: '',
          isPhoneVerified: isPhoneVerified
        })
      }
    ).catch(error => console.error("Error en updatePhone", error))
  }


  // create new user if not exist
  createUserIfNotExist(user) {
    this.getUser(user.uid).valueChanges().pipe(take(1)).subscribe((snapshot: any) => {
      if (snapshot === null) {
        this.updateUserProfile(user);
      }
    });
  }

  //confirm PhoneNumber
  getCodePhoneNumber(applicationVerifier, phoneNumber): Promise<any> {
    var provider = new firebase.auth.PhoneAuthProvider();
    return provider.verifyPhoneNumber(phoneNumber, applicationVerifier)
  }
}
