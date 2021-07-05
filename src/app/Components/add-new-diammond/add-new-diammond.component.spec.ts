import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDiammondComponent } from './add-new-diammond.component';

describe('AddNewDiammondComponent', () => {
  let component: AddNewDiammondComponent;
  let fixture: ComponentFixture<AddNewDiammondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewDiammondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDiammondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
