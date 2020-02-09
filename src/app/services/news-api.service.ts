import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IArticle, ISource } from '../interfaces/articles';

@Injectable()
export class NewsApiService {
  public articles: Array<IArticle> = [];
  public sources: Array<any> = [];
  public selectedArticle: any;
  public selectedSource: any;
  private apiKey: string = 'ce419493557a449086434c0dd4acb7dc';
  private timesArticlesLoaded: number = 0;

  constructor(private http: Http) { }

  public getArticles (source): Promise<Array<any>> {
    return this.http.get(`https://newsapi.org/v2/everything?sources=${source.id}&pageSize=5&page=${this.getPage()}&apiKey=${this.apiKey}`)
      .toPromise()
      .then((response) => {
        if (response.ok) {
          const jsonResponse = response.json();
          this.articles.push(...jsonResponse.articles.map(article => {
          	article.publishedAt = this.getDate(article.publishedAt);
          	return <IArticle>article;
          }));
          this.timesArticlesLoaded++;
          return this.articles;
        }
      });
  }

  public getSources (): Promise<Array<any>> {
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.apiKey}`)
      .toPromise()
      .then((response) => {
        if (response.ok) {
          const jsonResponse = response.json();
          this.sources = jsonResponse.sources;
          this.selectedSource = this.sources[0];
          return this.sources;
        }
      });
  }

  public resetArticles (): void {
    this.articles = [];
    this.timesArticlesLoaded = 0;
  }

  private getPage (): number {
    return this.timesArticlesLoaded + 1;
  }

  public addArticle (formValue: any) {
    this.articles.unshift({
      title: formValue.title,
      description: formValue.description,
      content: formValue.content,
      author: formValue.author,
      urlToImage: formValue.image,
      publishedAt: this.getDate(formValue.date),
      url: formValue['source-url'],
      source: undefined
    });
  }

  public editArticle (formValue: any): void {
    this.articles[this.selectedArticle.id] = {
      title: formValue.title,
      description: formValue.description,
      content: formValue.content,
      author: formValue.author,
      urlToImage: formValue.image,
      publishedAt: this.getDate(formValue.date),
      url: formValue['source-url'],
      source: undefined
    };
  }

  public setSelectedArticle (article: any): void {
    this.selectedArticle = this.articles.find((item) => item.url === article.url);
    this.selectedArticle.id = this.articles.indexOf(this.selectedArticle);
  }

  public deleteSelectedArticle (): void {
    this.articles.splice(this.selectedArticle.id, 1);
  }

  public setSelectedSource (id: string): void {
    this.selectedSource = this.sources.find((source) => source.id === id);
  }

  private getDate (date: string): string {
  	return new Date (date).toISOString().slice(0, 16)
  }
}
