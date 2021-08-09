import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { tiposFinanciacion, universidades } from 'src/environments/environment';
import { Universidad } from '../models/universidad';
import { Location } from '@angular/common';
import { TiposFinanciacion } from '../models/tipos-financiacion';


@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.page.html',
  styleUrls: ['./university-detail.page.scss'],
})
export class UniversityDetailPage implements OnInit {

  idUniversity: number;
  university: {foto: string, nombre: string, mision: string, vision: string};
  /*university: Universidad = {id: 1,
    nombre: "Fundación universitaria de San Gil unisangil",
    nombrePrincipal: "UNISANGIL",
    vision: " En el 2014 Bienestar Institucional será el articulador de la comunidad Unisangil, que propende por su consolidación, mejoramiento de la calidad de vida y formación integral de sus miembros; propicia el desarrollo humano en las dimensiones Biológica, Psico-afectiva, intelectual, Espiritual, Social, trascendentes y Operativas. ",
    mision: " Somos Bienestar Institucional, red dinámica de relaciones (docentes, estudiantes, personal administrativo y de servicios generales) y como tal propiciamos ambientes que contribuyan a la formación integral y al mejoramiento de la calidad de vida de sus integrantes, mediante el cultivo de auto cuidado, del crecimiento personal, del desarrollo de los valores, intereses y potencialidades individuales en el reconocimiento del otro, de tal manera se proyecte al contexto regional y nacional para transformarlo. ",
    foto: "../../assets/unisangil.png",
    logo: "../../assets/logos/unisangil.png",
    direccion: "Cl. 24 #31100, Yopal, El Milagro, Casanare",
    telefono: "3106282527",
    color: "#FFFF33",
    colorTransparent: "#ffc40952",
    listaProgramas: [
      'Administración de empresas - Presencial',
      'Contaduría pública - Presencial',
      'Derecho - Presencial',
      'Enfermería - Presencial',
      'Ingeniería Agrícola - Presencial',
      'Ingeniería Ambiental - Presencial',
      'Ingeniería de Sistemas - Presencial',
      'Ingeniería Electrónica - Presencial',
      'Psicología - Presencial'
    ]};
  universidades: Universidad[];
  //tiposFinanciacion: TiposFinanciacion[];
  tiposFinanciacion: TiposFinanciacion[] = [
    {
      id: 1,
      nombre: "Sufi",
      logo: "../../assets/financiadores/sufi.jpg",
      idsUniversidades: [3]
    },
    {
      id: 2,
      nombre: "Icetex",
      logo: "../../assets/financiadores/icetex.jpg",
      idsUniversidades: [3]
    },
    {
      id: 3,
      nombre: "Counisangil",
      logo: "../../assets/financiadores/counisangil.jpg",
      idsUniversidades: [1]
    },
    {
      id: 4,
      nombre: "Banco Pichincha",
      logo: "../../assets/financiadores/pichincha.jpg",
      idsUniversidades: [3]
    },
    {
      id: 5,
      nombre: "Bancoomeva",
      logo: "../../assets/financiadores/bancoomeva.jpg",
      idsUniversidades: [2]
    },
    {
      id: 6,
      nombre: "Congente",
      logo: "../../assets/financiadores/congente.jpg",
      idsUniversidades: [2]
    },
    {
      id: 7,
      nombre: "Cupe",
      logo: "../../assets/financiadores/cupe.jpg",
      idsUniversidades: [2]
    },
    {
      id: 8,
      nombre: "Ifc",
      logo: "../../assets/financiadores/ifc.jpg",
      idsUniversidades: [2]
    },
    {
      id: 9,
      nombre: "Coopfuturo",
      logo: "../../assets/financiadores/coofuturo.jpg",
      idsUniversidades: [2]
    },
    {
      id: 10,
      nombre: "Banco Av Villas",
      logo: "../../assets/financiadores/avvillas.jpg",
      idsUniversidades: [2]
    },
    {
      id: 11,
      nombre: "Davivienda",
      logo: "../../assets/financiadores/davivienda.jpg",
      idsUniversidades: [2]
    },
    {
      id: 12,
      nombre: "Confiar Coop",
      logo: "../../assets/financiadores/confiar.jpg",
      idsUniversidades: [2]
    },
    {
      id: 13,
      nombre: "Banco Caja Social",
      logo: "../../assets/financiadores/cajaSocial.jpg",
      idsUniversidades: [2]
    },
    {
      id: 14,
      nombre: "Banco de Bogota",
      logo: "../../assets/financiadores/bancoBogota.jpg",
      idsUniversidades: [2]
    },
    {
      id: 15,
      nombre: "Credito de confianza Remington",
      logo: "../../assets/financiadores/uniremington.jpg",
      idsUniversidades: [2]
    },
    {
      id: 16,
      nombre: "Creditoeducativo Comfama",
      logo: "../../assets/financiadores/comfama.jpg",
      idsUniversidades: [2]
    }
  ];*/


  constructor(
    private rutaActiva: ActivatedRoute,
    private location: Location
  ) { }



  ngOnInit() {

    this.university = {
      foto: this.rutaActiva.snapshot.params.foto,
      nombre: this.rutaActiva.snapshot.params.nombre,
      mision: this.rutaActiva.snapshot.params.mision,
      vision: this.rutaActiva.snapshot.params.vision
    };
    //his.firebase.list('tiposFinanciacion').valueChanges().subscribe((data)=>{this.tiposFinanciacion=data as Array<TiposFinanciacion>;
    /*this.idUniversity = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log('Imprimiendo valor de id', this.idUniversity)
    this.universidades = universidades;
    this.tiposFinanciacion = tiposFinanciacion.filter(x => x.idsUniversidades.includes(this.idUniversity));
    this.university = this.universidades.find(x => x.id === this.idUniversity);

    console.log('Imprimiendo valor de uiversidad', this.university)*/

  }

  back() {
    this.location.back();
  }

}
