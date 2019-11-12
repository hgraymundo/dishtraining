import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  Users: any;
  searchFilter: any;
  p: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
