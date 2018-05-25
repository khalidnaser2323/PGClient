import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Templete10Component } from './templete10.component';

describe('Templete10Component', () => {
  let component: Templete10Component;
  let fixture: ComponentFixture<Templete10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Templete10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Templete10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
