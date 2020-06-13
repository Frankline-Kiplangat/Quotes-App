import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote} from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter()
  quoteWords:string
  quoteEditor:string
  quoteAuthor:string
  quoteDate:number
  words:any

  submitQuote(){
    this.words = new Quote(this.quoteEditor,this.quoteAuthor,this.quoteWords)
    this.quoteWords=''
    this.quoteAuthor=''
    this.quoteEditor=''
    this.emitQuote.emit(this.words)
  }



  constructor() { }

  ngOnInit() {
  }

}
