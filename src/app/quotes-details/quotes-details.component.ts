import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quote:Quote 
  Likes=0;
  Dislikes=0;

  constructor() { }

  ngOnInit(): void {
  }

}
