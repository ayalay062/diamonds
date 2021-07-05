import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatDatepicker,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatTableModule, MatDialogModule
}from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyFormComponent } from './Components/my-form/my-form.component';
import { MyTableComponent } from './Components/my-table/my-table.component';
import { MyGridComponent } from './Components/my-grid/my-grid.component';
import { EnterComponent } from './Components/enter/enter.component';
import { DiamondsoftraderComponent } from './Components/diamondsoftrader/diamondsoftrader.component';
import { DiamonddetailsComponent } from './Components/diamonddetails/diamonddetails.component';
import { NewtraderComponent } from './Components/newtrader/newtrader.component';
import { NProfessionalComponent } from './Components/n-professional/n-professional.component';
import { FinishStatusComponent } from './Components/finish-status/finish-status.component';
import { DiamondOfProfessionalComponent } from './Components/diamond-of-professional/diamond-of-professional.component';
import { ProfessionalDitailsComponent } from './professional-ditails/professional-ditails.component';
import { AddNewDiammondComponent } from './Components/add-new-diammond/add-new-diammond.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { UpdateConfirmComponent } from './Components/update-confirm/update-confirm.component';
import { ConfirmNewDiamondComponent } from './Components/confirm-new-diamond/confirm-new-diamond.component';
import { UpdateComponent } from './Components/update/update.component';

@NgModule({
   entryComponents:[DiamonddetailsComponent, DeleteComponent,UpdateComponent,UpdateConfirmComponent,ConfirmNewDiamondComponent],
   declarations: [
    AppComponent,
    MyFormComponent,
    MyTableComponent,
    MyGridComponent,
    EnterComponent,
    DiamondsoftraderComponent,
    DiamonddetailsComponent,
    NewtraderComponent,
    NProfessionalComponent,
    FinishStatusComponent,
    DiamondOfProfessionalComponent,
    ProfessionalDitailsComponent,
    AddNewDiammondComponent,
    DeleteComponent,
    UpdateComponent,
    UpdateConfirmComponent,
    ConfirmNewDiamondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  bootstrap: [AppComponent]
})
export class AppModule { }
