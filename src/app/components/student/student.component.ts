import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  Students: any;
  searchFilter: any;
  p: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
