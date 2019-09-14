import { Component, OnInit,Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Book} from '../model/book';

@Injectable({
  providedIn:'root'
})

export class NewData{

    cart:Book[]=[];
   private messageSource = new BehaviorSubject<Book[]>(this.cart);
   cartbook=this.messageSource.asObservable();

   constructor(){}


   changeBook(book:Book[]){
     this.messageSource.next(book);
   }

}