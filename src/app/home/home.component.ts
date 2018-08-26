import { Component, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';


import { catchError, map, tap } from 'rxjs/operators';

import { Response } from '@angular/http';

const URL = 'http://localhost:8080/api/';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  fileToUpload: File = null;

  constructor(config:NgbCarouselConfig,
  @Inject('baseUrl') private baseUrl,
  private http: HttpClient,
  private el: ElementRef) {
    config.interval = 1000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
  }

  ngOnInit() {
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  

}
