import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent implements OnInit {

  @Input()
  costProduse!: string;
  @Input()
  costLivrare!: string;
  @Input()
  costTotal!: string;
  @Input()
  btnText!: string;
  @Input()
  routeLink!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
