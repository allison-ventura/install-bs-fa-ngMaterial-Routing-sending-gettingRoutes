import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { TabThreeComponent } from './tab-three/tab-three.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { TabFourComponent } from './tab-four/tab-four.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    NavbarComponent,
    BodyComponent,
    ProductDetailComponent,
    ProductsComponent,
    TabFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
