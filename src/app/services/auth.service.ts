import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  setLogin(login: any):Observable<any>{
    return  this.http.post<any>(this.apiURL + '/student-login', login);
  }
  
  setUserLoggedIn(user) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getLoggegIn() {
    return localStorage.getItem('isLoggedIn');
  }
  
  getId() {
    return "70fb5232-2b73-4494-8aeb-ff914e444ffb";
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('currentUser');
  } 
  
}
