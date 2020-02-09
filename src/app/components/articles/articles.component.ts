import { Component, Input } from '@angular/core';

import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  @Input() source: any;

  public articlesLoading: boolean = false;
  public articles: Array<any> = [];

  constructor(public newsApiService: NewsApiService) { }

  ngOnChanges() {
    if (this.source) {
      this.newsApiService.getArticles(this.source);
    } 
  }

  public loadMore() {
    this.newsApiService.getArticles(this.source);
  }
}
