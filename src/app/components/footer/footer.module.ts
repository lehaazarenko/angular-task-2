import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
