import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Stiri } from '../shared/stiri';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
   displayedColumns: string[] = ['titlu'];

  stiri: Stiri[];

  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getStiri();
  }

  getStiri() {
    return this.newsService.getStiri()
    .subscribe(
      stiri => {
        console.log(stiri);
        this.stiri = stiri;
      }
    );
  }

}