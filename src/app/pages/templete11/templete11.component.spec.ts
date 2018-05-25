import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Templete11Component } from './templete11.component';

describe('Templete11Component', () => {
  let component: Templete11Component;
  let fixture: ComponentFixture<Templete11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Templete11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Templete11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
