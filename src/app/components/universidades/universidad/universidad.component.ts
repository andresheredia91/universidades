import { Component, OnInit } from '@angular/core';
import { UniversidadService } from '../../../services/universidad.service';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.scss'],
})
export class UniversidadComponent implements OnInit {

  constructor(private universidadService: UniversidadService) { }

  ngOnInit() {}
  onSubmit(data: any) {}

}
