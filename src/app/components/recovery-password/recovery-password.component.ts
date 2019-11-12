import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AccountService } from '../../services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {

  _idRecovery: any;
  templateForm: FormGroup;
  submitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.activatedRoute.paramMap.subscribe(params => {
      this._idRecovery = params.get("id");
      this.templateForm.controls['hash_recovery'].setValue(this._idRecovery); 
    })
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      confirm_password:['',[Validators.required, Validators.minLength(8)]],
      hash_recovery:['']
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value); //this.toastrService.success("Registro Exitoso !!!");
      this.accountService.setNewPassword(this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.submitted = false;
        this.templateForm.reset();
      }, err => { //console.log(error.error[0])
        this.toastrService.error(JSON.stringify(err.error[0].message));
      })
    }    
  }

}
