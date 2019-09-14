import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import {RouterModule,Routes} from '@angular/router';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';

const appRoutes:Routes=[
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'book',
    component:BookComponent
  },
  {
    path:'filter',
    component:SearchresultComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'order',
    component:OrderplacedComponent
  },
  {
    path:'**',
    component:BookComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookComponent,
    CartComponent,
    SearchresultComponent,
    CheckoutComponent,
    OrderplacedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
