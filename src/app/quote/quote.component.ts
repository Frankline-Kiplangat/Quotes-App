import { Component, OnInit } from '@angular/core';
import { Quote } from  '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes =[
    new Quote(1,'Life becomes easier when you learn to accept the apology you never got.', '~R. Brault',new Date(2020,1,14)),
    new Quote(2,'Turn your wounds into wisdom.','~Oprah Winfrey',new Date (2010,1,16)),
    new Quote(3,'“A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.”','~G.K. Chesterton',new Date (2010,1,16)),
    new Quote(4,'Try to be a rainbow in someone’s cloud.','~Dr Maya Angelou',new Date (2010,1,16)),
    new Quote(5,'“What I like in a good author is not what he says, but what he whispers.”','~ Logan Pearsall Smith',new Date (2010,1,16))
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.entryDate = new Date(quote.entryDate)
    this.quotes.push(quote)
  }
  toogleDetails(index){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
  }

  completeQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].message}`)
      if(toDelete){
      this.quotes.splice(index,1);
    }
  }
}
  constructor() { }

  ngOnInit() {
  }

}
