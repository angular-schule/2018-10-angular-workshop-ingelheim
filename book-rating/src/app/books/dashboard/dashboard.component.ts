import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.bs.getAllBooks()
      .subscribe(books => this.books = books);
  }

  updateAndSort(book: Book) {
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    this.books = [...this.books, book];
  }
}
