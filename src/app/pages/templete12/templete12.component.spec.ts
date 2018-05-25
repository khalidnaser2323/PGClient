import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Templete12Component } from './templete12.component';

describe('Templete12Component', () => {
  let component: Templete12Component;
  let fixture: ComponentFixture<Templete12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Templete12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Templete12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
