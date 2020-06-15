import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Frank','Life becomes easier when you learn to accept the apology you never got.','TYler Brian', new Date(2018,4,27),0,0),
    new Quote(2,'Frank','The only thing I know is that I know nothing','Shakespear',new Date(2018,4,28),0,0),
    new Quote(3,'Frank', 'A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.','Dux Man',new Date(2018,4,28),0,0),
    new Quote(4,'Elly', 'What I like in a good author is not what he says, but what he whispers','Bazuu',new Date(2018,4,28),0,0)
  ];

  deleteQuote(isComplete,index){
      if (isComplete){
          let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}'s quote`)

          if(toDelete){
              this.quotes.splice(index,1)
          }
      }
  }

  toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id=quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)

  }

  constructor() { }

  ngOnInit() {
  }

}
