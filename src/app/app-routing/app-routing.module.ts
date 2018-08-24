import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { ShopComponent } from '../shop/shop.component';
import { AddNewsComponent } from '../add-news/add-news.component';
import { NewsComponent } from '../news/news.component';

import { CommonModule } from '@angular/common';

const routes: Routes = [
   { 
     path: 'customers', 
     component: CustomerComponent 
   },
   { 
     path: 'customer/add', 
     component: AddCustomerComponent 
   },
   { 
     path: 'customers/:id', 
     component: CustomerDetailsComponent 
   },
   {
      path: 'shops',
      component: ShopComponent
   },
   {
      path: 'addnews',
      component: AddNewsComponent
   },
   {
      path: 'news',
      component: NewsComponent
   },
   { 
     path: '', 
     redirectTo: 'customers', 
     pathMatch: 'full'
   }, 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
