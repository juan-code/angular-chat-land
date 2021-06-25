import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//root routing
import { AppRouting } from './app-routing.module'

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouting ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
