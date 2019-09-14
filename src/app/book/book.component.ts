import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/apiservice';
import {Book} from '../model/book';
import {DataService} from '../service/dataservice';
import {NewData} from '../service/newData';
import {Router} from '@angular/router';
import {Data} from '../service/data'
import { from } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  b:Boolean=false;
  bookcart:Book;
  cart:Book[]=[];
  filteredBook:Book[]=[];
  message:string;
  model={
    name:''
  }
  books:Book[]=[];

  
  numbers;

  constructor(private apiservice:ApiService,private data:NewData,private d:Data,private router:Router) { 
    this.numbers = Array(5).fill(0).map((x,i)=>i);
    this.books.length=50;
  }

  

  ngOnInit() {
    if(!localStorage.getItem('bookstore')){
    this.getAllBooks();
    }else{
      this.books=JSON.parse(localStorage.getItem('bookstore'));
      this.b=true;
    }
    this.data.cartbook.subscribe(res=>console.log(res))
   // this.data.currentMessage.subscribe(message => this.message = message);
    this.d.filterbook.subscribe(res=>console.log(res));

   
  }

  getAllBooks()
  {
    this.apiservice.getBooks().subscribe(res=>{
      this.books=res;
      this.books.length=100;
      localStorage.setItem('bookstore',JSON.stringify(this.books));
      this.b=true;
      console.log(this.books);
    },
    err=> console.log(err))
  }


  newBook(book:Book)
  {
    alert('Successfully Added To Cart');
    if(localStorage.getItem('cart')){
    this.cart=JSON.parse(localStorage.getItem('cart'));
    }
    this.cart.push(book);
   localStorage.setItem('cart',JSON.stringify(this.cart));
  }

  search(){
    this.filteredBook= this.books.filter(book=>book.authors==this.model.name);
  //  this.books=this.filteredBook;
    this.d.changeBook(this.filteredBook)
    this.router.navigateByUrl('filter');
   //location.reload();
    console.log(this.model.name);
    
  }


}
