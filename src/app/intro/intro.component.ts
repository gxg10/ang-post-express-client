import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Stiri } from '../shared/stiri';
import {MatPaginatorModule, PageEvent, MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  displayedColumns: string[] = ['titlu', 'continut'];

  stiri: Stiri[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageIndex: number;
  length = 6;
  pageSize = 3;
  pageSizeOptions: number[] = [1, 3, 6];
  currentPage = 0;
  pageEvent: PageEvent;


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

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
