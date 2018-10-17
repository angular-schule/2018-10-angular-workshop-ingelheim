import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // Vorsicht: wird uns ggf. später auf die Füße fallen
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[];
  constructor() { }

  ngOnInit() {
    this.books = [{
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    }, {
      isbn: '111',
      title: 'AngularJS',
      description: 'Altes Buch',
      rating: 3
    }];
  }

  updateAndSort(book: Book) {
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);
  }
}
