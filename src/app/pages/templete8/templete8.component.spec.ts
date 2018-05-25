import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Templete8Component } from './templete8.component';

describe('Templete8Component', () => {
  let component: Templete8Component;
  let fixture: ComponentFixture<Templete8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Templete8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Templete8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
