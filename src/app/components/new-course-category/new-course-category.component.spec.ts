import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseCategoryComponent } from './new-course-category.component';

describe('NewCourseCategoryComponent', () => {
  let component: NewCourseCategoryComponent;
  let fixture: ComponentFixture<NewCourseCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
