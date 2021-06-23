import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  user: any = {};

  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    }
  ];
  public labels = [
    {
      title: 'Cerrar Sesíon',
      url: '/welcome',
      icon: 'exit'
    }
  ];
  public universidad = [
    {
      title: 'Agregar Universidad',
      url: '/register-universidad',
      icon: 'exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.afAuth.authState.subscribe(authData => this.user = authData);
      this.afAuth.authState.pipe(take(1)).subscribe((authData:any) => {
        if (authData && authData?.user?.emailVerified) {
          this.router.navigateByUrl('/welcome', { skipLocationChange: true, replaceUrl: true }).then(
            res => {
              //this.showSplash = false;
            })
        } else {
          this.router.navigateByUrl('/login', { skipLocationChange: true, replaceUrl: true }).then(
            res => {
              //this.showSplash = false;
            })
        }
      })

    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
