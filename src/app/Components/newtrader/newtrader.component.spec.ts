import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtraderComponent } from './newtrader.component';

describe('NewtraderComponent', () => {
  let component: NewtraderComponent;
  let fixture: ComponentFixture<NewtraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
