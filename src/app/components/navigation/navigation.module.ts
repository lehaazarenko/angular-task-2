import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule { }
