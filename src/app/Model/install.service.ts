import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstallService {

  baseUrl= "http://localhost:8082";
  constructor(private http : HttpClient) {}

  createInstall(install: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/saveinstall`, install);
  }

   getInstall(){
   return this.http.get(`${this.baseUrl}/getall`,);
   }
}
