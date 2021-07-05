import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondOfProfessionalComponent } from './diamond-of-professional.component';

describe('DiamondOfProfessionalComponent', () => {
  let component: DiamondOfProfessionalComponent;
  let fixture: ComponentFixture<DiamondOfProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondOfProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondOfProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
