import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFunctionalAreaComponent } from './edit-functional-area.component';

describe('EditFunctionalAreaComponent', () => {
  let component: EditFunctionalAreaComponent;
  let fixture: ComponentFixture<EditFunctionalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFunctionalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFunctionalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
