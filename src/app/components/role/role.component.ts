import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../../shared/confirm-dialog/confirm-dialog.service';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../../services/role.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  
  searchFilter: any;
  p: number = 1;
  Roles: [];

  constructor(
    private confirmDialogService: ConfirmDialogService,
    private toastrService: ToastrService,
    private roleService: RoleService
  ) { }

  ngOnInit() {
    this.loadRoles();
  }

  loadRoles() {
    this.roleService.getRole().subscribe( result => {
      this.Roles = result;
    })
  }



}
