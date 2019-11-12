import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  __apiURL: string = environment.apiUrl;
  __object: String = "account";

  constructor(private http: HttpClient) { }
  
  setAccount(data: any):Observable<any> {
    return this.http.post<any>( this.__apiURL + '/' + this.__object, data )
  }

  getAccount():Observable<any> {
    return this.http.get<any>( this.__apiURL + '/' + this.__object );
  }

  getAccountById(id: any):Observable<any> {
    return this.http.get<any>( this.__apiURL + '/'+ this.__object +'/' + id );
  }

  updateAccount(id: any, data: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/' + id, data);
  }

  deleteAccount(id: any):Observable<any> {
    return this.http.delete<any>( this.__apiURL + '/' + this.__object +'/' + id);
  }

  setEnableAccount(id: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/enable/' + id, {});
  }
  setDisableAccount(id: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/disable/' + id, {});
  }

  setActivateAccount(id: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/activate/' + id, {});
  }

  setRecoveryPassword(data: any):Observable<any> {
    return this.http.post<any>( this.__apiURL + '/' + this.__object + '/recovery-password', data )
  }

  setNewPassword(data: any):Observable<any> {
    return this.http.post<any>( this.__apiURL + '/' + this.__object + '/new-password', data )
  }
}
