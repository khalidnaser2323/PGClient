import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesTemplateComponent } from './stages-template.component';

describe('StagesTemplateComponent', () => {
  let component: StagesTemplateComponent;
  let fixture: ComponentFixture<StagesTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagesTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
