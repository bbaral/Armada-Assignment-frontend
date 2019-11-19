import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroceryListComponent} from './grocery-list/grocery-list.component';
import {EditGroceryListComponent} from "./edit-grocery-list/edit-grocery-list.component";


const routes: Routes = [
  {path: 'grocery/getAllList', component: GroceryListComponent},
  {path: '', redirectTo: '/grocery/getAllList', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
