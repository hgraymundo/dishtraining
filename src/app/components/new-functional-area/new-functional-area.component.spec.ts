import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFunctionalAreaComponent } from './new-functional-area.component';

describe('NewFunctionalAreaComponent', () => {
  let component: NewFunctionalAreaComponent;
  let fixture: ComponentFixture<NewFunctionalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFunctionalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFunctionalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
