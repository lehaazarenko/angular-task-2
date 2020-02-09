import { Component, Input } from '@angular/core';

import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() sourceName: string;
}
