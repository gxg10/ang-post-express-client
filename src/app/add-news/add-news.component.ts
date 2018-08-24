import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService } from '../services/news.service';
import { Stiri } from '../shared/stiri';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  @ViewChild('modstiri') feedbackFormDirective;
  stiriForm: FormGroup;
  stire: Stiri;
  submitted = null;
  showForm = true;

  constructor(private fb: FormBuilder,
  private newsservice: NewsService) { }

  ngOnInit() {
  this.createForm();
  
  }

  createForm() {
    this.stiriForm = this.fb.group({
      titlu: '',
      continut: ''
    });
  }

  onSubmit() {
    this.stire = this.stiriForm.value;
    console.log(this.stire);
    this.showForm = false;
    this.newsservice.submitStiri(this.stire)
    .subscribe(stire =>{
      this.submitted = stire;
      this.stire = null;
    }, error => console.log(error.status, error.message));
    this.stiriForm.reset({
      titlu: '',
      continut: ''
    });
    this.feedbackFormDirective.resetForm();
  }
}
