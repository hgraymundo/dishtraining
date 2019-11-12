import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FunctionalAreaService } from '../../services/functional-area.service';

@Component({
  selector: 'app-edit-functional-area',
  templateUrl: './edit-functional-area.component.html',
  styleUrls: ['./edit-functional-area.component.css']
})
export class EditFunctionalAreaComponent implements OnInit {

  FunctionalArea: any;
  _idFuncionalArea: any;
  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private functionalAreaService: FunctionalAreaService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this._idFuncionalArea = params.get("id");
    })
    this.loadFuncionalAreaById(this._idFuncionalArea);
    this.createForm();
  }

  loadFuncionalAreaById(id_: any) {
    this.functionalAreaService.getFunctionalAreaById(id_).subscribe( result => { console.log(result);
      this.FunctionalArea = result;
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
      this.functionalAreaService.updateFunctionalArea(this._idFuncionalArea, this.templateForm.value).subscribe( result => { console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
      }, error => { console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

  setForm() {
    this.templateForm.controls['name'].setValue(this.FunctionalArea['name']); 
    this.templateForm.controls['description'].setValue(this.FunctionalArea['description']); 
  }

}
