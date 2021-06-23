import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  loader = null;
  isAppInForeground: boolean;

  constructor(
    private toastCtrl: ToastController,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController,
    private location: Location,
    private storage: Storage
  ) { }

  showToast(message) {
    this.toastCtrl.create({ message: message, duration: 3000 }).then(res => res.present());
  }

  showAlert(message) {
    this.alertCtrl.create({
      message: message,
      buttons: ['ok']
    }).then(res => res.present());
  }

  async showLoader() {
    if (this.loader == null) {
      this.loader = await this.loadCtrl.create({
        spinner: "dots",
        duration: 3000
      });
      await this.loader.present();
    }
  }

  hideLoader() {
    if (this.loader != null) {
      this.loader.dismiss();
      this.loader = null
    }
  }

  backPage() {
    this.location.back();
  }

}
