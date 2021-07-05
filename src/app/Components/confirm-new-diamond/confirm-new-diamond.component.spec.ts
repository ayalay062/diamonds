import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmNewDiamondComponent } from './confirm-new-diamond.component';

describe('ConfirmNewDiamondComponent', () => {
  let component: ConfirmNewDiamondComponent;
  let fixture: ComponentFixture<ConfirmNewDiamondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmNewDiamondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmNewDiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
