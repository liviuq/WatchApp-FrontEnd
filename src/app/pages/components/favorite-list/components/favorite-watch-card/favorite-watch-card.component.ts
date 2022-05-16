import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-watch-card',
  templateUrl: './favorite-watch-card.component.html',
  styleUrls: ['./favorite-watch-card.component.css']
})
export class FavoriteWatchCardComponent implements OnInit {

  @Input() name!: string;
  @Input() price!: string;
  @Input() seller!: string;
  @Input() noStars!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
