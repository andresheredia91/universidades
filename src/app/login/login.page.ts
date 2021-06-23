import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userInfo: any = {};

  constructor(
    private commonService: CommonService,
    private auth: AuthService,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.userInfo.correo && this.userInfo.contrasenna) {
      this.commonService.showLoader();
      this.auth.login(this.userInfo.correo, this.userInfo.contrasenna).then(authData => {

        if (authData.user.emailVerified) {
          this.commonService.hideLoader();
          this.navController.navigateRoot(['/home']);
        } else {
          this.commonService.showAlert("Debe confirmar el correo de verificación")
        }
      }, error => {
        this.commonService.hideLoader();
        console.log(error);

        if (error.message == "INVALID_PASSWORD") {
          this.commonService.showToast("Datos Invalidos");
        }
        else if (error.code == "auth/user-not-found") {
          this.commonService.showToast("Usuario no registrado");
        }
        else if (error.code == "auth/wrong-password") {
          this.commonService.showToast("Datos Invalidos");
        }
        else if (error.code == "auth/invalid-email") {
          this.commonService.showToast("Verifica el correo eñectronico");
        }
        else if (error.code == "auth/too-many-requests") {
          this.commonService.showToast("Bloqueado temporalmente. Por favor, inténtelo de nuevo más tarde.");
        }
        else {
          this.commonService.showToast(error.message);
        }
      });
    }
    else {
      this.commonService.showToast("Complete todos los campos");
    }

  }
  back() {
    this.navController.navigateForward(['/welcome']);
  }

}
