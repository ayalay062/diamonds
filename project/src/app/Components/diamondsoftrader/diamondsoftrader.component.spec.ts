import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondsoftraderComponent } from './diamondsoftrader.component';

describe('DiamondsoftraderComponent', () => {
  let component: DiamondsoftraderComponent;
  let fixture: ComponentFixture<DiamondsoftraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondsoftraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondsoftraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
