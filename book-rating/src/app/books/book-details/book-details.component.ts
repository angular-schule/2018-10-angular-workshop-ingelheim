import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  isbn$: Observable<string>;
  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    // #region
    this.route.paramMap
      .subscribe(params =>
        this.isbn = params.get('isbn')
      );

    // alternativ
    this.isbn$ = this.route.paramMap
      .pipe(
        map(params => params.get('isbn'))
      );
    // #endregion

    this.book$ = this.route.paramMap
      .pipe(
        map(params => params.get('isbn')),
        // concatMap
        switchMap(isbn => this.bs.getSingleBook(isbn))
      );


  }

}
