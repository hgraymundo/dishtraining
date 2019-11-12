import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../../shared/confirm-dialog/confirm-dialog.service';
import { ToastrService } from 'ngx-toastr';
import { CourseCategoryService } from '../../services/course-category.service';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CourseCategoryComponent implements OnInit {

  searchFilter: any;
  p: number = 1;
  CourseCategories: [];

  constructor(
    private confirmDialogService: ConfirmDialogService,
    private toastrService: ToastrService,
    private courseCategoryService: CourseCategoryService
  ) { }

  ngOnInit() {
    this.loadTypeCourse();
  }

  loadTypeCourse() {
    this.courseCategoryService.getCourseCategory().subscribe( result => {
      this.CourseCategories = result;
    })
  }

  public openConfirmationDialog(id_: any, title_: any) {
    let _title = 'Confirma!.'
    let _content = '¿Estás seguro de eliminar el área de: '+ title_ +' ?'
    this.confirmDialogService.confirm( _title, _content )
    .then( result => { 
      if(result) {
        this.courseCategoryService.deleteCourseCategory(id_).subscribe( result => {
          this.toastrService.success(JSON.stringify(result[0].message));
          this.loadTypeCourse();
        })
      }
     })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  enable(id_: any) { 
    this.courseCategoryService.setEnableCourseCategory(id_).subscribe( result => { console.log( result )
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadTypeCourse();
    }, error => {
      this.toastrService.warning(JSON.stringify(error[0].message));
    })
  }

  disable(id_: any) { 
    this.courseCategoryService.setDisableCourseCategory(id_).subscribe( result => { console.log( result )
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadTypeCourse();
    }, error => {
      this.toastrService.warning(JSON.stringify(error[0].message));
    })
  }

}
