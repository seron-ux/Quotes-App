import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Buy new clothes', 'Attend my birthday',new Date(2019,9,14), 0, 0),
    new Quote(2,'Pay for the trip','Wake up very early',new Date(2019,6,9), 0, 0),
    new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,1,12), 0, 0),
    new Quote(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,11,18), 0, 0),
    new Quote(5,'Solve math homework','Damn Math',new Date(2019,2,14), 0, 0),
    new Quote(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,3,14), 0, 0),
  ];
  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  upVote(quote:any) {
    quote.upvotes = quote.upvotes + 1;
  }
  downVote(quote:any) {
    quote.downvotes = quote.downvotes + 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}