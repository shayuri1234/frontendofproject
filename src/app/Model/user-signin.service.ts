import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSigninService {
  baseUrl= "http://localhost:8082";


  constructor(private http : HttpClient) { }

  createUserSignIn(usersignin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/saveuser`, usersignin);
}
}