import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Give light and people will find the way', 'Ella Baker',0,0),
    new Quote(2, 'One could not pluck a flower without troubling a star', 'Loren Eiseley',0,0),
    new Quote(3, 'Courage is fear holding on a minute longer', 'George S. Patton',0,0),
    new Quote(4, 'A cure for seasickness is to sit under a tree', 'Spike Milligan',0,0),
    new Quote(5, 'Hope is independent of the apparatus of logic', 'Norman Cousins',0,0),
    new Quote(6, 'Reach for it, push yourself as far as you can', 'Christa McAullife',0,0),

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

  constructor() { }

  ngOnInit() {
  }

}
