import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit() {
    // this.loadRoles();
    // this.loadFunctionalAres();
    this.createForm();
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.templateForm.invalid) {
        return;
    } else {
      console.log(this.templateForm.value);
      this.authService.setLogin(this.templateForm.value).subscribe( result => {
        if(result){
          console.log("LOGIN");
          this.authService.setUserLoggedIn(result);
          this.router.navigate(["/home"]);  
        } else {
          console.log("NO LOGIN");
        }
      }, error => {
        console.log("ERROR");
        console.log(error);
        this.toastrService.warning(error.message);
      })
    }
  }

}
