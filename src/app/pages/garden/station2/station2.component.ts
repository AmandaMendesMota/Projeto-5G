import { Component, OnInit } from '@angular/core';
import { Temperature } from './temperature/temperature.model';

import{ Station2Service} from './station2.service'

@Component({
  moduleId: module.id,
  selector: 'ngx-station2',
  templateUrl: './station2.component.html',
})
export class Station2Component implements OnInit{

  temperatures: Temperature[]

  constructor(private station1Service: Station2Service) { } //declarando uma propriedade

  ngOnInit() {
    this.station1Service.temperatures()
    .subscribe(temperatures => this.temperatures = temperatures)
  }
   
  
}
