import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NewsApiService } from '../../services/news-api.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Output() sourceUpdated = new EventEmitter<any>();
  public sourcesLoading: boolean = true;
  public sources: Array<any> = [];
  public selectedSource: any;

  constructor(public newsApiService: NewsApiService, private modalService: ModalService) { }

  ngOnInit() {
    this.newsApiService.getSources().then((sources) => {
      this.sourcesLoading = false;
      this.newsApiService.resetArticles();
    })
  }

  public onSourceSelectChange(value) {
    this.newsApiService.resetArticles();
    this.newsApiService.setSelectedSource(value)
  }

  public createArticle() {
    this.modalService.open('create-modal');
  }
}
