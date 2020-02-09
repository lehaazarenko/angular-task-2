import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NotFoundComponent } from './notFound.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
