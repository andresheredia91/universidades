import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  university: Universidad;
  universidades: Universidad[];
  tiposFinanciacion: TiposFinanciacion[];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }



  ngOnInit() {

    this.idUniversity = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log('Imprimiendo valor de id', this.idUniversity)
    this.universidades = universidades;
    this.tiposFinanciacion = tiposFinanciacion.filter(x => x.idsUniversidades.includes(this.idUniversity));
    this.university = this.universidades.find(x => x.id === this.idUniversity);

    console.log('Imprimiendo valor de uiversidad', this.university)

  }

  back() {
    this.location.back();
  }

}
