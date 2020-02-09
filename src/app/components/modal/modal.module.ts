import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ModalComponent],
  exports: [ModalComponent]
})
export class ModalModule { }
