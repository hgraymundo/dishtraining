import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../../shared/confirm-dialog/confirm-dialog.service';
import { ToastrService } from 'ngx-toastr';
import { TypeCourseService } from '../../services/type-course.service';

@Component({
  selector: 'app-type-course',
  templateUrl: './type-course.component.html',
  styleUrls: ['./type-course.component.css']
})
export class TypeCourseComponent implements OnInit {

  searchFilter: any;
  p: number = 1;
  typesCourse: [];

  constructor(
    private confirmDialogService: ConfirmDialogService,
    private toastrService: ToastrService,
    private typeCourseService: TypeCourseService
  ) { }

  ngOnInit() {
    this.loadTypeCourse();
  }

  loadTypeCourse() {
    this.typeCourseService.getTypeCourse().subscribe( result => {
      this.typesCourse = result;
    })
  }

  public openConfirmationDialog(id_: any, title_: any) {
    let _title = 'Confirma!.'
    let _content = '¿Estás seguro de eliminar el área de: '+ title_ +' ?'
    this.confirmDialogService.confirm( _title, _content )
    .then( result => { 
      if(result) {
        this.typeCourseService.deleteTypeCourse(id_).subscribe( result => {
          this.toastrService.success(JSON.stringify(result[0].message));
          this.loadTypeCourse();
        })
      }
     })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  enable(id_: any) { 
    this.typeCourseService.setEnableTypeCourse(id_).subscribe( result => { console.log( result )
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadTypeCourse();
    }, error => {
      this.toastrService.warning(JSON.stringify(error[0].message));
    })
  }

  disable(id_: any) { 
    this.typeCourseService.setDisableTypeCourse(id_).subscribe( result => { console.log( result )
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadTypeCourse();
    }, error => {
      this.toastrService.warning(JSON.stringify(error[0].message));
    })
  }

}
