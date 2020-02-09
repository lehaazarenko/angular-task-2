import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ArticlesComponent } from './articles.component';
import { ArticleModule } from '../article/article.module';

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [ArticlesComponent],
  exports: [ArticlesComponent]
})
export class ArticlesModule { }
