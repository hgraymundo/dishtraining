import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeCourseService {

  __apiURL: string = environment.apiUrl;
  __object: String = "type-course";

  constructor(private http: HttpClient) { }
  
  setTypeCourse(data: any):Observable<any> {
    return this.http.post<any>( this.__apiURL + '/' + this.__object, data )
  }

  getTypeCourse():Observable<any> {
    return this.http.get<any>( this.__apiURL + '/' + this.__object );
  }

  getTypeCourseById(id: any):Observable<any> {
    return this.http.get<any>( this.__apiURL + '/'+ this.__object +'/' + id );
  }

  updateTypeCourse(id: any, data: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/' + id, data);
  }

  deleteTypeCourse(id: any):Observable<any> {
    return this.http.delete<any>( this.__apiURL + '/' + this.__object +'/' + id);
  }

  setEnableTypeCourse(id: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/enable/' + id, {});
  }
  setDisableTypeCourse(id: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/disable/' + id, {});
  }
}
