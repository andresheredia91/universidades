import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { UniversidadService } from '../services/universidad.service';
// Class
import { UniversidadOriginal } from '../models/universidad-original';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-universidad',
  templateUrl: './register-universidad.page.html',
  styleUrls: ['./register-universidad.page.scss'],
})
export class RegisterUniversidadPage implements OnInit {

  userInfo: any = {};
  

  constructor(
    private commonService: CommonService,
    private navController: NavController,
    private authService: AuthService,
    private universidadService: UniversidadService
  ) { }

  ngOnInit() {
    this.universidadService.getUniversidades();
    this.resetForm();
  }
  onSubmit(universidadForm: NgForm)
  {
    if(universidadForm.value.$key == null)
      this.universidadService.insertUniversidad(universidadForm.value);
    else
    this.universidadService.updateUniversidad(universidadForm.value);
    this.resetForm(universidadForm);
  }

  resetForm(universidadForm?: NgForm)
  {
    if(universidadForm != null)
      universidadForm.reset();
      this.universidadService.selectedUniversidad = new UniversidadOriginal();
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
