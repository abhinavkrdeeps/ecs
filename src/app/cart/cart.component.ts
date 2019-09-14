import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/dataservice';
import { Book } from '../model/book';
import { NewData } from '../service/newData';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Book[];
  rem:Book[];
  message:string

  constructor(private data:NewData) {

    
   }

  ngOnInit() {

    this.cart=JSON.parse(localStorage.getItem('cart'));
    console.log(this.cart);
    
  }

  removeBook(book:Book)
  {
   this.rem= JSON.parse( localStorage.getItem('cart'));
  
   this.cart= this.rem.filter(item=> JSON.stringify( item)!=JSON.stringify(book));
   console.log(this.cart);
    localStorage.setItem('cart' ,   JSON.stringify(this.cart));
    //location.reload();
  }

}
