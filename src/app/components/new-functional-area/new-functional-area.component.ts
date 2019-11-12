import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FunctionalAreaService } from '../../services/functional-area.service';

@Component({
  selector: 'app-new-functional-area',
  templateUrl: './new-functional-area.component.html',
  styleUrls: ['./new-functional-area.component.css']
})
export class NewFunctionalAreaComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private functionalAreaService: FunctionalAreaService
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
      this.functionalAreaService.setFunctionalArea(this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.submitted = false;
        this.templateForm.reset();
      }, error => { console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

}
