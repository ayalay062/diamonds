import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDitailsComponent } from './professional-ditails.component';

describe('ProfessionalDitailsComponent', () => {
  let component: ProfessionalDitailsComponent;
  let fixture: ComponentFixture<ProfessionalDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalDitailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
