import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { RoleService } from '../../services/role.service';
import { FunctionalAreaService } from '../../services/functional-area.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;
  Roles: [];
  FunctionalAreas: [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private roleService: RoleService,
    private functionalAreaService: FunctionalAreaService,
    private accountService: AccountService
  ) { this.createForm(); }

  ngOnInit() {
    this.loadRoles();
    this.loadFunctionalAres();
  }

  loadRoles() {
    this.roleService.getRole().subscribe( result => {
      this.Roles = result;
    })
  }

  loadFunctionalAres() {
    this.functionalAreaService.getFunctionalArea().subscribe( result => {
      this.FunctionalAreas = result;
    })
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      no_employee: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      gender: [''],
      cellphone: [''],
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', [Validators.required]],
      functional_id: ['', [Validators.required]],
      street: [''],
      colony: [''],
      municipal: [''],
      state: ['']
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value); //this.toastrService.success("Registro Exitoso !!!");
      this.accountService.setAccount(this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.templateForm.reset();
      }, error => { console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

}
