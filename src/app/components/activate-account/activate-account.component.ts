import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AccountService } from '../../services/account.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  _idActivate: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this._idActivate = params.get("id");
      this.accountService.setActivateAccount(this._idActivate).subscribe( result => { //console.log(result);
        // this.toastrService.success(JSON.stringify(result[0].message));
      }, err => { //console.log(error.error[0])
        this.toastrService.error(JSON.stringify(err.error[0].message));
      })
    })
  }

  

}
