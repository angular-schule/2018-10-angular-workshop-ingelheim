import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.invalid && control.dirty;
  }

  hasError(name: string, errorCode: string) {
    const control = this.bookForm.get(name);
    return control.hasError(errorCode) && control.dirty;
  }

  /*
  hasError2(name: string, errorCode: string) {
    const control = this.bookForm.get(name);
    return control.errors[errorCode] && control.dirty;
  }*/

  submitForm() {
    // TODO: 1. EventEmitter `created` feuern, mit dem Buch
    //       2. Buch dem Array hinzufügen (AppComponent)
  }
}
