import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote} from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quote (0, "", "", new Date());
  @Output() addQuote= new EventEmitter<Quote>();
  quoteWords:string
  quoteEditor:string
  quoteAuthor:string
  quoteDate:number
  theWords:any

  submitQuote(){
    this.theWords = new Quote(this.quoteEditor,this.quoteAuthor,this.quoteWords)
    this.quoteWords=''
    this.quoteAuthor=''
    this.quoteEditor=''
    this.addQuote.emit(this.theWords)
  }



  constructor() { }

  ngOnInit() {
  }

}
