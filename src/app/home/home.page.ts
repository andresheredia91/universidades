import { Component, OnInit } from '@angular/core';
import { universidades } from 'src/environments/environment';
import { UniversidadOriginal } from '../models/universidad-original';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

})
export class HomePage implements OnInit {

  universidades: UniversidadOriginal[];
  texto: string;
  universidadPrincipal: UniversidadOriginal[];
  constructor(public popoverController: PopoverController, private firebase: AngularFireDatabase, private router: Router) { }


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
    this.firebase.list('universidades').valueChanges().subscribe((data)=>{this.universidadPrincipal=data as Array<UniversidadOriginal>;
    this.universidades = this.universidadPrincipal
  });
  }
  public busqueda (evento: any)
  {
    //let universidadTemp = this.universidades;
    if (this.texto == '')
    {
      this.universidades = this.universidadPrincipal;
    } else
    {
      this.universidades = this.universidadPrincipal.filter(x=>x.nombre == this.texto || x.principal == this.texto);
    }
  }
  public open (foto: any, nombre: any, mision: any, vision: any)
  {
    this.router.navigate(['/university-detail',{foto: foto, nombre: nombre, mision: mision, vision: vision}]);
  }

  }