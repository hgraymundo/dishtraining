import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TypeCourseService } from '../../services/type-course.service';
@Component({
  selector: 'app-new-type-course',
  templateUrl: './new-type-course.component.html',
  styleUrls: ['./new-type-course.component.css']
})
export class NewTypeCourseComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private typeCourseService: TypeCourseService
  ) { this.createForm(); }


  ngOnInit() {
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
      this.typeCourseService.setTypeCourse(this.templateForm.value).subscribe( result => { //console.log(result);
        this.submitted = false;
        this.toastrService.success(JSON.stringify(result[0].message));
        this.templateForm.reset();
      }, error => { console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }
  
}
