import{ Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Temperature } from "./temperature/temperature.model";

import { API } from "../../../app.api";

@Injectable()
export class Station2Service{
    
    constructor(private http: HttpClient){}

    temperatures(): Observable<Temperature[]> {
        console.log(this.http.get<Temperature[]>(`${API}/station2`))
        return this.http.get<Temperature[]>(`${API}/station2`)
    }
}
//classe que acessa o backend