import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
//above Imported ReactFormsModule for Reactive form and than import it on 

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule, ],
  declarations: [ AppComponent, FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
