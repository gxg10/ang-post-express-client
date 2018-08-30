import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ShopComponent } from './shop/shop.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { baseUrl } from './baseurl';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';


import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { UICarouselModule } from "ui-carousel";
import { FooterComponent } from './footer/footer.component';
import { RedColorDirective } from './redcolor';
import { RedColor2Directive } from './red-color2.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    ShopComponent,
    AddNewsComponent,
    NewsComponent,
    HomeComponent,
    IntroComponent,
    HeaderComponent,
    FooterComponent,
    RedColorDirective,
    RedColor2Directive
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatSortModule, MatTableModule, BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, UICarouselModule
  ],
  providers: [{ provide: 'baseUrl', useValue: baseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
