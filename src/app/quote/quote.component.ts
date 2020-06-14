import { Component, OnInit } from '@angular/core';
import { Quote } from  '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote(1,'Change the world by being yourself.', '~Amy Poehler',new Date(2020,1,14)),
    new Quote(2,'Every moment is a fresh beginning','~T.S Eliot',new Date (2010,1,16)),
    new Quote(3,'“A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.”','~G.K. Chesterton',new Date (2010,1,16)),
    new Quote(4,'Problems are not stop signs, they are guidelines','~Robert H. Schiuller',new Date (2010,1,16)),
    new Quote(5,'One day the people that don’t even believe in you will tell everyone how they met you','~Johnny Depp',new Date (2010,1,16))
  ]
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