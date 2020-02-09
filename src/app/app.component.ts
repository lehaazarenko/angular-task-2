import { Component } from '@angular/core';
import { NewsApiService } from './services/news-api.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewsApiService, ModalService]
})
export class AppComponent {

  constructor(private modalService: ModalService, public newsApiService: NewsApiService) { }

  public openModal(id: string) {
    this.modalService.open(id);
  }

  public closeModal(id: string) {
    this.modalService.close(id);
  }

  public onCreateFormSubmit(formValue: any) {
    console.log('onCreateFormSubmit value:', formValue);
    this.newsApiService.addArticle(formValue);
    this.closeModal('create-modal');
  }

  public onEditFormSubmit(formValue: any) {
    console.log('onEditFormSubmit formValue:', formValue);
    this.newsApiService.editArticle(formValue);
    this.closeModal('edit-modal');
  }

  public getUrlPattern(): string {
    return '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})'
  }
}
