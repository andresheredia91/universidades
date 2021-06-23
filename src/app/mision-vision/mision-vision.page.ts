import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Universidad } from '../models/universidad';
import { ActivatedRoute } from '@angular/router';
import { universidades } from 'src/environments/environment';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.page.html',
  styleUrls: ['./mision-vision.page.scss'],
})
export class MisionVisionPage implements OnInit {
  idUniversity: number;
  university: Universidad;
  universidades: Universidad[];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.idUniversity = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log('Imprimiendo valor de id', this.idUniversity)
    this.universidades = universidades;
    this.university = this.universidades.find(x => x.id === this.idUniversity);

    console.log('Imprimiendo valor de uiversidad', this.university)
  }
  back() {
    this.location.back();
  }
  }
