import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { Station2Component } from './station2.component'
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
   
  ],
  declarations: [
    TemperatureComponent,
    TemperatureDraggerComponent,
    Station2Component,

  ],
})
export class Station2Module { }
