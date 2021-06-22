import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishStatusComponent } from './finish-status.component';

describe('FinishStatusComponent', () => {
  let component: FinishStatusComponent;
  let fixture: ComponentFixture<FinishStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
