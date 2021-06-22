import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamonddetailsComponent } from './diamonddetails.component';

describe('DiamonddetailsComponent', () => {
  let component: DiamonddetailsComponent;
  let fixture: ComponentFixture<DiamonddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamonddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamonddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
