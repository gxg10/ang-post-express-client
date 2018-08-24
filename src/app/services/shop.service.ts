import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shop } from '../shops';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type':'application/json'})	
};

@Injectable({
  providedIn: 'root'
})
export class ShopService {

	private shopsUrl = 'http://localhost:8080/api/shops';

  constructor(
  	private http: HttpClient
  ) { }

  getShops (): Observable<Shop[]>{
  	return this.http.get<Shop[]>(this.shopsUrl)
  }
}
