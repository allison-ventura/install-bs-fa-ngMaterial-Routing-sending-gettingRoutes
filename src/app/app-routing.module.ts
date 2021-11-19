import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { TabFourComponent } from './tab-four/tab-four.component';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabThreeComponent } from './tab-three/tab-three.component';
import { TabTwoComponent } from './tab-two/tab-two.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'tabOne', component: TabOneComponent },
  { path: 'tabTwo', component: TabTwoComponent },
  { path: 'tabThree', component: TabThreeComponent }, 
  { path: 'tabFour', component: TabFourComponent }, 

    //we will create sending and getting routes paramaters

    { path: 'products', component: ProductsComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },
  
  { path: '**', component: AlertComponent } // If no matching route found, go back to home route






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
