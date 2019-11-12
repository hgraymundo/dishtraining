import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeCourseComponent } from './edit-type-course.component';

describe('EditTypeCourseComponent', () => {
  let component: EditTypeCourseComponent;
  let fixture: ComponentFixture<EditTypeCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTypeCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
