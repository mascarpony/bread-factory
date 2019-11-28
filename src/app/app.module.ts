import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const MAT_MODULES = [
  MatButtonModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...MAT_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
