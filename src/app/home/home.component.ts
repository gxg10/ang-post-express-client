import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http';

import { map } from 'rxjs/operators';

const URL = 'http://localhost:8080/api/txtupload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  filestoUpload: Array<File> = [];

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

  upload() {
    // locate the file element meant for the file upload.
        const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
        const files: Array<File> = this.filestoUpload;
        console.log(files);
    // get the total amount of files attached to the file input.
        const fileCount: number = inputEl.files.length;
    // create a new fromdata instance
        const formData = new FormData();
    // check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            // append the key name 'photo' with the first file in the element
            for (let i = 0; i < fileCount; i++) {
                formData.append('txtFileFilter', inputEl.files.item(i));
            }
            // call the angular http method
            this.http
                .post(URL, formData).pipe(map((res:any) => res)).subscribe(
                 files=> console.log('files',files));
            this.filestoUpload = undefined;
          }
       }
}
