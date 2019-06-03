import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 public maxCount=0;
  quotes = [
    new Quote(1, 'Give light and people will find the way', 'Ella Baker',0,new Date(2019,6,2)),
    new Quote(2, 'One could not pluck a flower without troubling a star', 'Loren Eiseley',0,new Date(2019,6,2)),
    new Quote(3, 'Courage is fear holding on a minute longer', 'George S. Patton',0,new Date(2019,6,2)),
    new Quote(4, 'A cure for seasickness is to sit under a tree', 'Spike Milligan',0,new Date(2019,6,2)),
    new Quote(5, 'Hope is independent of the apparatus of logic', 'Norman Cousins',0,new Date(2019,6,2)),
    new Quote(6, 'Reach for it, push yourself as far as you can', 'Christa McAullife',0,new Date(2019,6,2)),

];

toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
deleteGoal(isComplete,index){
  if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete){
          this.quotes.splice(index,1)
      }
  }
}
addVotes(index){
  this.quotes[index].vote += 1;
  if(this.quotes[index].vote > this.maxCount) this.maxCount=this.quotes[index].vote;
  else if (this.quotes[index].vote <= this.maxCount) console.log(this.maxCount);
}
minusVotes(index){
  if(this.quotes[index].vote > 0)this.quotes[index].vote -= 1;
  else this.quotes[index].vote = 0;
}
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.Date = new Date(quote.date)
  this.quotes.push(quote)

}


  constructor() { }

  ngOnInit() {
  }

}
