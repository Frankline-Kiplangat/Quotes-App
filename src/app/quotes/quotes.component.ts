import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote ("Essays of Three Decades", "Thomas Mann", "A writer is someone for whom writing is more difficult than it is for other people."),
    new Quote("Mystery and Manners: Occasional Prose", "Flannery O'Connor", "Anybody who has survived his childhood has enough information about life to last him the rest of his days.")
  ]
    

  addQuote(chosenQuote: Quote) {
    this.quotes.push(chosenQuote)
  }

  like(i: string | number) {
    this.quotes[i].likes ++;
  }
  dislike(i: string | number) {
    this.quotes[i].dislikes  ++;
  }
  delQuote(i: number) {
    this.quotes.splice(i, 1)
  }
  preNum:number
  lastNum:number
  counter:number

  highestLikes(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].likes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }



constructor() { }

ngOnInit() {
}

}
