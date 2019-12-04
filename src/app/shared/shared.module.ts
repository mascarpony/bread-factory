import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const MAT_MODULES = [
  MatButtonModule,
  MatCardModule,
];

@NgModule({
  imports: [MAT_MODULES, CommonModule, RouterModule],
  declarations: [ProductCardComponent, ProductsListComponent],
  exports: [ProductCardComponent, ProductsListComponent, MAT_MODULES],
})
export class SharedModule { }
