import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl= "http://localhost:8082";
  constructor(private http : HttpClient) {}

  createAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, admin);
  }

   
}
