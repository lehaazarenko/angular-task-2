import { Component, Input } from '@angular/core';

import { ModalService } from '../../services/modal.service';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'article-item',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() articleData: any;

  constructor(private modalService: ModalService, private newsApiService: NewsApiService) { }

  public openModal(id: string) {
    switch(id) {
      case 'edit-modal': this.newsApiService.setSelectedArticle(this.articleData);
      default: this.modalService.open(id);
    }
    this.modalService.open(id);
  }

  public closeModal(id: string) {
    this.modalService.close(id);
  }

  public deleteArticle() {
    this.newsApiService.setSelectedArticle(this.articleData);
    this.newsApiService.deleteSelectedArticle();
  }
}
