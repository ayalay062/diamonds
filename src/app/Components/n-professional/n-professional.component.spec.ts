import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NProfessionalComponent } from './n-professional.component';

describe('NProfessionalComponent', () => {
  let component: NProfessionalComponent;
  let fixture: ComponentFixture<NProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
