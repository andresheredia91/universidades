import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userInfo: any = {};

  constructor(
    private commonService: CommonService,
    private navController: NavController,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  signup() {

    if (!this.userInfo.nombres || !this.userInfo.apellidos || !this.userInfo.correo || !this.userInfo.contrasenna || !this.userInfo.confirmarContrasenna || !this.userInfo.celular) {
      this.commonService.showToast("Complete todos los campos");
    } else {
      if (this.userInfo.contrasenna == this.userInfo.confirmarContrasenna) {
          this.commonService.showLoader();
          this.authService.register(this.userInfo).subscribe(authData => {
            this.commonService.hideLoader();
            console.log("Respuesta desde servicio de regsitro", authData);

            this.navController.navigateForward(['/send-email'])
          }, error => {
            this.commonService.hideLoader();
            if (error.code == "auth/email-already-in-use") {
              this.commonService.showToast("La dirección de correo electrónico ya está en uso por otra cuenta.");
            } else {
              this.commonService.showToast(error.message);
            }
          });
      } else {
        this.commonService.showAlert("Las contraseñas no coinciden")
      }

    }
  }

  back() {
    this.navController.navigateForward(['/welcome']);
  }

}
