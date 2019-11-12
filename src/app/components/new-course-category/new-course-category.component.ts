import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CourseCategoryService } from '../../services/course-category.service';

@Component({
  selector: 'app-new-course-category',
  templateUrl: './new-course-category.component.html',
  styleUrls: ['./new-course-category.component.css']
})
export class NewCourseCategoryComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private courseCategoryService: CourseCategoryService
  ) { this.createForm(); }

  ngOnInit() {
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['']
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value); //this.toastrService.success("Registro Exitoso !!!");
      this.courseCategoryService.setCourseCategory(this.templateForm.value).subscribe( result => { //console.log(result);
        this.submitted = false;
        this.toastrService.success(JSON.stringify(result[0].message));
        this.templateForm.reset();
      }, error => { console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

}
