import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    // this.loadRoles();
    // this.loadFunctionalAres();
    this.createForm();
  }

  // loadRoles() {
  //   this.roleService.getRole().subscribe( result => {
  //     this.Roles = result;
  //   })
  // }

  // loadFunctionalAres() {
  //   this.functionalAreaService.getFunctionalArea().subscribe( result => {
  //     this.FunctionalAreas = result;
  //   })
  // }

  createForm() {
    this.templateForm = this.formBuilder.group({
      no_employee: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', [Validators.required]],
      terms:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { //console.log(this.templateForm.value); //this.toastrService.success("Registro Exitoso !!!");
      this.accountService.setAccount(this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.submitted = false;
        this.templateForm.reset();
      }, err => { //console.log(error.error[0])
        this.toastrService.error(JSON.stringify(err.error[0].message));
      })
    }    
  }

}
