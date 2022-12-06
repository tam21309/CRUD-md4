import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './tutorial-route/products/products.component';
import { ProductAddComponent } from './tutorial-route/product-add/product-add.component';
import { ProductDeleteComponent } from './tutorial-route/product-delete/product-delete.component';
import { ProductEditComponent } from './tutorial-route/product-edit/product-edit.component';
import { ProductComponent } from './tutorial-route/product/product.component';

const routes: Routes = [
  { path: '',                   redirectTo: 'products', pathMatch: 'full' },
  { path: 'products',           component: ProductsComponent },
  { path: 'products/add',       component: ProductAddComponent },
  { path: 'products/:id',       component: ProductComponent },
  { path: 'products/:id/edit',  component: ProductEditComponent },
  { path: 'products/:id/delete',component: ProductDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
