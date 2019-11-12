import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  __apiURL: string = environment.apiUrl;
  __object: String = "role";

  constructor(private http: HttpClient) { }
  
  setRole(data: any):Observable<any> {
    return this.http.post<any>( this.__apiURL + '/' + this.__object, data )
  }

  getRole():Observable<any> {
    return this.http.get<any>( this.__apiURL + '/' + this.__object );
  }

  getRoleById(id: any):Observable<any> {
    return this.http.get<any>( this.__apiURL + '/'+ this.__object +'/' + id );
  }

  updateRole(id: any, data: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/' + id, data);
  }

  deleteRole(id: any):Observable<any> {
    return this.http.delete<any>( this.__apiURL + '/' + this.__object +'/' + id);
  }

  setEnableRole(id: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/enable/' + id, {});
  }
  setDisableRole(id: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/disable/' + id, {});
  }

}
