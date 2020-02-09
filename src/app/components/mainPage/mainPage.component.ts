import { Component, Input } from '@angular/core';

import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'main-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent {
  constructor(public newsApiService: NewsApiService) { }
}
