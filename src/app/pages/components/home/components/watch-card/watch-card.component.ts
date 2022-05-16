import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watch-card',
  templateUrl: './watch-card.component.html',
  styleUrls: ['./watch-card.component.css']
})
export class WatchCardComponent implements OnInit {

  @Input() name!: string;
  @Input() price!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
