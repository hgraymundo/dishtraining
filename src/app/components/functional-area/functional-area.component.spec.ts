import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalAreaComponent } from './functional-area.component';

describe('FunctionalAreaComponent', () => {
  let component: FunctionalAreaComponent;
  let fixture: ComponentFixture<FunctionalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
