import { Component, OnInit,Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Book} from '../model/book';

@Injectable({
  providedIn:'root'
})

export class Data{

    filter:Book[]=[];
   private messageSource = new BehaviorSubject<Book[]>(this.filter);
   filterbook=this.messageSource.asObservable();

   constructor(){}


   changeBook(book:Book[]){
     this.messageSource.next(book);
   }

}
