import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCourseComponent } from './type-course.component';

describe('TypeCourseComponent', () => {
  let component: TypeCourseComponent;
  let fixture: ComponentFixture<TypeCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
