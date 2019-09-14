import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../model/book';

@Injectable({
    providedIn:'root'
  })
  
  export class ApiService{

    constructor(private http:HttpClient){}

    private API_URL="https://cors-anywhere.herokuapp.com/"+"http://starlord.hackerearth.com/books";

    getBooks(){
      return this.http.get<Book[]>(this.API_URL);
    }


  }