import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-a-watch-card',
  templateUrl: './buy-a-watch-card.component.html',
  styleUrls: ['./buy-a-watch-card.component.css']
})
export class BuyAWatchCardComponent implements OnInit {


  @Input() name!: string;
  @Input() price!: string;
  @Input() seller!: string;
  @Input() isPromoted!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
