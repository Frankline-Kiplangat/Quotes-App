import { Component, OnInit } from '@angular/core';
import { quotes } from  '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes =[
    new quotes(1,'Life becomes easier when you learn to accept the apology you never got.', '~R. Brault',new Date(2020,7,14)),
    new quotes(2,'Turn your wounds into wisdom.','~Oprah Winfrey',new Date (2011,5,16)),
    new quotes(3,'“A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.”','~G.K. Chesterton',new Date (2010,1,16)),
    new quotes(4,'Try to be a rainbow in someone’s cloud.','~Dr Maya Angelou',new Date (2012,1,16)),
    new quotes(5,'“What I like in a good author is not what he says, but what he whispers.”','~ Logan Pearsall Smith',new Date (2013,1,26))
  ]
  upvotes(i) { this.quotes [i].upvotes ++;}
  downvote(i) { this.quotes [i].downvotes++;}
  addNewQuote(quote: quotes){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.entryDate = new Date(quote.entryDate)
    this.quotes.push(quote)
  }
  toogleDetails(index: string | number){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
  }

  completeQuote(isComplete: any,index: number){
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
