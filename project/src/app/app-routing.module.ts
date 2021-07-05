import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterComponent } from './Components/enter/enter.component';
import { NewtraderComponent } from './Components/newtrader/newtrader.component';
import { DiamonddetailsComponent } from './Components/diamonddetails/diamonddetails.component';
import { DiamondsoftraderComponent } from './Components/diamondsoftrader/diamondsoftrader.component';
import { NProfessionalComponent } from './Components/n-professional/n-professional.component';
import { DiamondOfProfessionalComponent } from './Components/diamond-of-professional/diamond-of-professional.component';
import { AddNewDiammondComponent } from './Components/add-new-diammond/add-new-diammond.component';
import { DeleteComponent } from './Components/delete/delete.component';



const routes: Routes = [
  { path: "", component: EnterComponent },
  { path: "new-trader", component: NewtraderComponent },
  { path: "diamond-details", component: DiamonddetailsComponent },
  { path: "diamonds-of-trader", component: DiamondsoftraderComponent },
  { path: "n-professional", component: NProfessionalComponent },
  { path: "diamond-of-professional", component:DiamondOfProfessionalComponent},
  { path: "add-new-diammond", component: AddNewDiammondComponent},
  { path:"delete-dialog", component:DeleteComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,RouterModule.forRoot(appRoute)
//   ]
// })
