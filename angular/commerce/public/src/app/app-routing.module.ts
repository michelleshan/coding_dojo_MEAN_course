import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetProductsComponent } from './get-products/get-products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'products', component: GetProductsComponent },
  { path: 'products/new', component: NewProductComponent },
  { path: 'products/:id', component: ShowProductComponent },
  { path: 'products/:id/edit', component: EditProductComponent },
  { path: '', pathMatch: 'full', redirectTo: 'products'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
