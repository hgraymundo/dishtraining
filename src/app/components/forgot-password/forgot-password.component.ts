import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.createForm();
  }

 

  createForm() {
    this.templateForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { //console.log(this.templateForm.value); //this.toastrService.success("Registro Exitoso !!!");
      this.accountService.setRecoveryPassword(this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.submitted = false;
        this.templateForm.reset();
      }, err => { //console.log(error.error[0])
        this.toastrService.error(JSON.stringify(err.error[0].message));
      })
    }    
  }

}
