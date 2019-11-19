import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {GroceryListService} from './service/grocery-list.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EditGroceryListComponent } from './edit-grocery-list/edit-grocery-list.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import {MessageBoxService} from "./service/message-box.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroceryListComponent,
    EditGroceryListComponent,
    MessageBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [GroceryListService, MessageBoxService],
  bootstrap: [AppComponent],
  entryComponents: [
    MessageBoxComponent
  ]
})
export class AppModule { }
