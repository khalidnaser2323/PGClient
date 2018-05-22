import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCharterComponent } from './team-charter.component';

describe('TeamCharterComponent', () => {
  let component: TeamCharterComponent;
  let fixture: ComponentFixture<TeamCharterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCharterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCharterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
