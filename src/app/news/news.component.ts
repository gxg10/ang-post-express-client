import { Component, OnInit } from '@angular/core';
import { Stiri } from '../shared/stiri';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

	stiri: Stiri[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  this.getStiri();
  }

  // old style
  getStiri() {
  return this.newsService.getStiri()
  .subscribe(
  stiri=> {
  console.log(stiri);
  this.stiri = stiri;
  }
);
  }

  // new style - udemy
  getnews() {
    return this.newsService.getnews()
    .subscribe(
      (stiri: any) => {
        this.stiri = stiri;
      }
    );
  }
}
