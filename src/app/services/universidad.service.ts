import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { UniversidadOriginal} from '../models/universidad-original';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  universidadList: AngularFireList<any>;
  selectedUniversidad: UniversidadOriginal = new UniversidadOriginal();

  constructor(private firebase: AngularFireDatabase) { }

  getUniversidades()
  {
    return this.universidadList =this.firebase.list('universidades');
  }

  insertUniversidad(universidad: UniversidadOriginal)
  {
    console.log(universidad.nombre);
    this.universidadList.push({
      nombre: universidad.nombre,
      principal: universidad.principal,
      mision: universidad.mision,
      vision: universidad.vision,
      foto: universidad.foto,
      logo: universidad.logo,
      direccion: universidad.direccion,
      telefono: universidad.telefono,
      color: universidad.color,
      transparent: universidad.transparent
    });
  }

  /*insertUniversidad(universidad: UniversidadOriginal)
  {
    console.log(universidad.nombre);
    this.universidadList.push({
      nombre: universidad.nombre,
      nombre_principal: universidad.nombre_principal,
      mision: universidad.mision,
      vision: universidad.vision,
      foto: universidad.foto,
      logo: universidad.logo,
      direccion: universidad.direccion,
      telefono: universidad.telefono,
      color: universidad.color,
      color_transparent: universidad.color_transparent
    });
  }*/
  //updateUniversidad (universidad: UniversidadOriginal)
  //{
    //this.universidadList.update(universidad.$key, {
      //nombre: universidad.nombre,
      //nombrePrincipal: universidad.nombrePrincipal,
      //mision: universidad.mision,
      //vision: universidad.vision,
      //foto: universidad.foto,
      //logo: universidad.logo,
      //direccion: universidad.direccion,
      //telefono: universidad.telefono,
      //color: universidad.color,
      //colorTransparent: universidad.colorTransparent
    //});
  //}
  /*updateUniversidad(universidad: UniversidadOriginal)
  {
    this.universidadList.update(universidad.$key, {
      nombre: universidad.nombre,
      nombre_principal: universidad.nombre_principal,
      mision: universidad.mision,
      vision: universidad.vision,
      foto: universidad.foto,
      logo: universidad.logo,
      direccion: universidad.direccion,
      telefono: universidad.telefono,
      color: universidad.color,
      color_transparent: universidad.color_transparent
    });
  }*/

  deleteUnivrsidad($key: string)
  {
    this.universidadList.remove($key);
  }
}
