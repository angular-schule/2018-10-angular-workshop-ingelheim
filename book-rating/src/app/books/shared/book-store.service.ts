import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>('https://api.angular.schule/books')
      .pipe(
        retry(3),
        // catchError
      );
  }

  getSingleBook(isbn: string): Observable<Book> {
    return this.http
      .get<Book>('https://api.angular.schule/book/' + isbn);
  }
}
