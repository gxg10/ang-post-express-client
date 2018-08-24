import { Component, OnInit } from '@angular/core';
import { Shop } from '../shops';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
	
	shops: Shop[];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  	this.getShops();
  }

  getShops() {
  	return this.shopService.getShops()
  				.subscribe(
  					shops=>{
  					console.log(shops);
  					this.shops = shops
  					}
  				);
  }

}
