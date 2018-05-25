import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Templete7Component } from './templete7.component';

describe('Templete7Component', () => {
  let component: Templete7Component;
  let fixture: ComponentFixture<Templete7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Templete7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Templete7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
