import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoviddataService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any>{
    const url = "https://coronavirus-19-api.herokuapp.com/countries";
    return this.http.get<any>(url);

  }
}
