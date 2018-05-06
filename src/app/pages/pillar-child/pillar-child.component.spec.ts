import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillarChildComponent } from './pillar-child.component';

describe('PillarChildComponent', () => {
  let component: PillarChildComponent;
  let fixture: ComponentFixture<PillarChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillarChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillarChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
