import { Component, OnInit } from '@angular/core';
import {Data} from '../service/data';
import { Book } from '../model/book';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  filteredbook:Book[]=[];
  cart:Book[]=[];

  constructor(private data:Data) { }

  ngOnInit() {
    this.data.filterbook.subscribe(res=>this.filteredbook=res);
  }

  addToCart(book:Book){

   alert("Book Added In Cart");
   if(localStorage.getItem('cart')){
   this.cart=JSON.parse(localStorage.getItem('cart'));
   }
   this.cart.push(book);
   localStorage.setItem('cart',JSON.stringify(this.cart));

   
    
  }

}
