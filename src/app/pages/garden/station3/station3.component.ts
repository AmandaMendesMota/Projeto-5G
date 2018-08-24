import { Component, OnInit } from '@angular/core';
import { Temperature } from './temperature/temperature.model';

import{ Station3Service} from './station3.service'

@Component({
  moduleId: module.id,
  selector: 'ngx-station3',
  templateUrl: './station3.component.html',
})
export class Station3Component implements OnInit{

  temperatures: Temperature[]

  constructor(private station1Service: Station3Service) { } //declarando uma propriedade

  ngOnInit() {
    this.station1Service.temperatures()
    .subscribe(temperatures => this.temperatures = temperatures)
  }
   
  
}
