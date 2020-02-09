import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { NotFoundModule } from './components/notFound/notFound.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { ArticlesModule } from './components/articles/articles.module';
import { ArticleModule } from './components/article/article.module';
import { MainPageModule } from './components/mainPage/mainPage.module';
import { ModalModule } from './components/modal/modal.module';

import { NotFoundComponent } from './components/notFound/notFound.component';
import { MainPageComponent } from './components/mainPage/mainPage.component';

const AppRoutes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: MainPageComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    FooterModule,
    NotFoundModule,
    NavigationModule,
    ArticlesModule,
    ArticleModule,
    MainPageModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
