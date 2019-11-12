import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCourseComponent } from './complete-course.component';

describe('CompleteCourseComponent', () => {
  let component: CompleteCourseComponent;
  let fixture: ComponentFixture<CompleteCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
