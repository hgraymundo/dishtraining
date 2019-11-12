import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTypeCourseComponent } from './new-type-course.component';

describe('NewTypeCourseComponent', () => {
  let component: NewTypeCourseComponent;
  let fixture: ComponentFixture<NewTypeCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTypeCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTypeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
