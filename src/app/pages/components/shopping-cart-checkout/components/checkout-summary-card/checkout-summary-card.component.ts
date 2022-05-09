import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-summary-card',
  templateUrl: './checkout-summary-card.component.html',
  styleUrls: ['./checkout-summary-card.component.css']
})
export class CheckoutSummaryCardComponent implements OnInit {

  @Input()
  costProduse!: string;
  @Input()
  costLivrare!: string;
  @Input()
  costTotal!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
