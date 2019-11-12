import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseCategoryService {

  __apiURL: string = environment.apiUrl;
  __object: String = "course-category";

  constructor(private http: HttpClient) { }
  
  setCourseCategory(data: any):Observable<any> {
    return this.http.post<any>( this.__apiURL + '/' + this.__object, data )
  }

  getCourseCategory():Observable<any> {
    return this.http.get<any>( this.__apiURL + '/' + this.__object );
  }

  getCourseCategoryById(id: any):Observable<any> {
    return this.http.get<any>( this.__apiURL + '/'+ this.__object +'/' + id );
  }

  updateCourseCategory(id: any, data: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/' + id, data);
  }

  deleteCourseCategory(id: any):Observable<any> {
    return this.http.delete<any>( this.__apiURL + '/' + this.__object +'/' + id);
  }

  setEnableCourseCategory(id: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/enable/' + id, {});
  }
  setDisableCourseCategory(id: any):Observable<any> {
    return this.http.put<any>( this.__apiURL + '/'+ this.__object +'/disable/' + id, {});
  }
}
