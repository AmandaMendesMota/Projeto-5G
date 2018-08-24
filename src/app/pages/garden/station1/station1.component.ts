import { Component, OnInit } from '@angular/core';
import { Temperature } from './temperature/temperature.model';

import{ Station1Service} from './station1.service'

@Component({
  moduleId: module.id,
  selector: 'ngx-station1',
  templateUrl: './station1.component.html',
})
export class Station1Component implements OnInit{

  temperatures: Temperature[]

  constructor(private station1Service: Station1Service) { } //declarando uma propriedade

  ngOnInit() {
    this.station1Service.temperatures()
    .subscribe(temperatures => this.temperatures = temperatures)
    console.log(this.station1Service.temperatures())
  }
  
}
