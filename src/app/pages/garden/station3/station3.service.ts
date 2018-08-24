import{ Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Temperature } from "./temperature/temperature.model";

import { API } from "../../../app.api";

@Injectable()
export class Station3Service{
    
    constructor(private http: HttpClient){}

    temperatures(): Observable<Temperature[]> {
        return this.http.get<Temperature[]>(`${API}/station3`)
    }
}
//classe que acessa o backend