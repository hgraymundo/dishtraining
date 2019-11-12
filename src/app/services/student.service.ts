import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  __apiURL: string = environment.apiUrl;
  __object: String = "student";

  constructor(private http: HttpClient) { }
  
  setStudent(data: any):Observable<any> {
    return this.http.post<any>( this.__apiURL + '/' + this.__object, data )
  }

  getStudent():Observable<any> {
    return this.http.get<any>( this.__apiURL + '/' + this.__object );
  }

  getStudentById(id: any):Observable<any> {
    return this.http.get<any>( this.__apiURL + '/'+ this.__object +'/' + id );
  }

  updateStudent(id: any, data: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/' + id, data);
  }

  deleteStudent(id: any):Observable<any> {
    return this.http.delete<any>( this.__apiURL + '/' + this.__object +'/' + id);
  }

  setEnableStudent(id: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/enable/' + id, {});
  }

  setDisableStudent(id: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/disable/' + id, {});
  }
}
