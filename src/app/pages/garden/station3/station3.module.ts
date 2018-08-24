import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { Station3Component } from './station3.component'
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
    Station3Component,

  ],
})
export class Station3Module { }
