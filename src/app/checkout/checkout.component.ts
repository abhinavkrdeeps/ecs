import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  finalCart:Book[]=[];
  finalPrice:number=0;

  constructor(private router:Router) { }

  ngOnInit() {
    this.finalCart= JSON.parse(localStorage.getItem('cart'));
    this.finalPrice=this.calculatePrice();
  }

  calculatePrice()
  {
    let price:number=0;

    if(this.finalCart.length>0)
    {
      for(let i=0;i<this.finalCart.length;i++)
      {
        price=+this.finalCart[i].price;

      }
    }
    return price;
  }
  emptyCart()
  {
    
    
    localStorage.removeItem('cart');
    this.router.navigateByUrl('order');
  }

}
