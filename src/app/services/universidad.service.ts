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
      transparent: universidad.transparent,
      carrera: universidad.carrera
    });
  }
  updateUniversidad(universidad: UniversidadOriginal)
  {
    this.universidadList.update(universidad.$key, {
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

  deleteUniversidad($key: string)
  {
    this.universidadList.remove($key);
  }
}
