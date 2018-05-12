import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/store/product-list/product-list.component';
import { ProductDetailComponent } from './products/store/product-detail/product-detail.component';
import { ProductBillComponent } from './products/store/product-bill/product-bill.component';
import { ProductItemComponent } from './products/store/product-list/product-item/product-item.component';
import { ShoppingListComponent } from './products/store/shopping-list/shopping-list.component';
import { StockComponent } from './products/inventory/stock/stock.component';
import { ProductFormComponent } from './products/inventory/stock/product-form/product-form.component';
import { StoreComponent } from './products/store/store.component';
import { InventoryComponent } from './products/inventory/inventory.component';
import { Product } from './products/product.model';

import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';


const routes: Routes = [ 
                          //Rutas componete products (store y inventory)
                         { path: 'products', component: ProductsComponent, 
                           children: 
                           [
                             { path: 'store', component: StoreComponent, 
                             children: [
                             {path: 'product-list', component: ProductListComponent},
                             {path: 'shopping-list', component: ShoppingListComponent},
                             {path: 'product-detail', component: ProductDetailComponent},
                         ] },
                         { path: 'product-bill', component: ProductBillComponent },
                         { path: 'product-form', component: ProductFormComponent },
                         { path: 'stock', component: StockComponent },
                         { path: 'inventory', component: InventoryComponent },

                           ] },
                         
                         //Rutas compoente user  login y registro 
                         { path: 'signup', component: UserComponent ,
                          children: [{path: '', component: SignUpComponent}]},
                         { path: 'login', component: UserComponent ,
                          children: [{path: '', component: SignInComponent}]}

                       ];

@NgModule({
  exports: [RouterModule],

  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
