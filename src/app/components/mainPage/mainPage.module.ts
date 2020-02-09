import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainPageComponent } from './mainPage.component';
import { ArticlesModule } from '../articles/articles.module';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ArticlesModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [MainPageComponent],
  exports: [MainPageComponent]
})
export class MainPageModule { }
