import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  // It maintains quote Model
  quoteModel: Quote;

// It maintains quote form display status. By default it will be false.
  showNew: Boolean = false;
  
// It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';

  constructor() { }

  ngOnInit() {
  }

}
