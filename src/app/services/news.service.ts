import { Injectable } from '@angular/core';
import { Stiri } from '../shared/stiri';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {

	private baseurl = 'http://localhost:8080/api/news';

  constructor(private http: HttpClient) { }

  submitStiri(stire: Stiri) : Observable<Stiri> {
  return this.http.post<Stiri>(this.baseurl,stire, httpOptions)
  }

  // old style 
  getStiri(): Observable<Stiri[]> {
  	return this.http.get<Stiri[]>(this.baseurl)
  }

  // new style - udemy
  getnews() {
    return this.http.get(this.baseurl);
      }
  }
