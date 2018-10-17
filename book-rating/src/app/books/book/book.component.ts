import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  @Input() book: Book;
  @Output() rated = new EventEmitter<Book>();

  constructor(public rs: BookRatingService) { }

  rateUp() {
    const ratedBook = this.rs.rateUp(this.book);
    this.rated.emit(ratedBook);

    // doof, weil wir doch ein @Input haben!
    // this.book = ratedBook;
  }

  rateDown() {
    const ratedBook = this.rs.rateDown(this.book);
    this.rated.emit(ratedBook);
  }

}
