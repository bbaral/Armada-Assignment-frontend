import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroceryListComponent} from './grocery-list/grocery-list.component';


const routes: Routes = [
  {path: 'home', component: GroceryListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'grocery/getAllList', component: GroceryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
