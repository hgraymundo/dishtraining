import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TypeCourseService } from '../../services/type-course.service';

@Component({
  selector: 'app-edit-type-course',
  templateUrl: './edit-type-course.component.html',
  styleUrls: ['./edit-type-course.component.css']
})
export class EditTypeCourseComponent implements OnInit {

  TypeCourse: any;
  _idTypeCourse: any;
  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private typeCourseService: TypeCourseService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this._idTypeCourse = params.get("id");
    })
    this.loadFuncionalAreaById(this._idTypeCourse);
    this.createForm();
  }

  loadFuncionalAreaById(id_: any) {
    this.typeCourseService.getTypeCourseById(id_).subscribe( result => { console.log(result);
      this.TypeCourse = result;
      this.setForm();
    })
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['']
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value); //this.toastrService.success("Registro Exitoso !!!");
      this.typeCourseService.updateTypeCourse(this._idTypeCourse, this.templateForm.value).subscribe( result => { console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
      }, error => { console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

  setForm() {
    this.templateForm.controls['name'].setValue(this.TypeCourse['name']); 
    this.templateForm.controls['description'].setValue(this.TypeCourse['description']); 
  }

}
