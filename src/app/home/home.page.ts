import { Component, OnInit } from '@angular/core';
import { universidades } from 'src/environments/environment';
import { Universidad } from '../models/universidad';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

})
export class HomePage implements OnInit {

  universidades: Universidad[];
  constructor(public popoverController: PopoverController) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'popoverCustom',
      showBackdrop: false,
      mode: "md",
      translucent: false
    });
    return await popover.present();
  }

  ngOnInit() {
    this.universidades = universidades;
  }

  }



