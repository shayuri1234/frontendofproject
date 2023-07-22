import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  baseUrl= "http://localhost:8082";

  constructor(private http : HttpClient) { }

  createUser(userlogin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/savelogin`, userlogin);

  }

}
