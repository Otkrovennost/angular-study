import {Component, OnInit, Input} from '@angular/core';
import {Card} from '../app.component';

@Component ({
  selector:'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() card!: Card
  @Input() index!: number

  title = 'Card title';
  text =  'Card text';
  textColor = 'blue';
  cardDate: Date = new Date()

  imgUrl = 'https://i.ytimg.com/vi/TtDP6lpSjWc/mqdefault.jpg';

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = 'https://im0-tub-ua.yandex.net/i?id=f05f867818475d676d760371cb284c83&n=13'
    }, 3000)
  }

  changeTitle() {
    this.card.title = 'Title has been changed!'
  }

  onInput(value: any) {
    this.card.title = value;
  }
}
