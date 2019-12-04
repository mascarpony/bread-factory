import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductResolverGuard } from '../services/product-resolver.guard';


const routes: Routes = [
  {
    path: 'product',
    component: ProductPageComponent,
    children: [
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: {
          product: ProductResolverGuard
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
