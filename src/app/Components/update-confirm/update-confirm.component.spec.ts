import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConfirmComponent } from './update-confirm.component';

describe('UpdateConfirmComponent', () => {
  let component: UpdateConfirmComponent;
  let fixture: ComponentFixture<UpdateConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
