import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true;

  cards: Card[] = [
    {
      title: 'Card 1',
      text: 'This is text for card 1'
    },
    {
      title: 'Card 2',
      text: 'This is text for card 2'
    },
    {
      title: 'Card 3',
      text: 'This is text for card 3'
    },
    {
      title: 'Card 4',
      text: 'This is text for card 4'
    },
    {
      title: 'Card 5',
      text: 'This is text for card 5'
    }
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
