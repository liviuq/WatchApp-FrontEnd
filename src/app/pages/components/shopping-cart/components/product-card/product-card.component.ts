import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  productName!: string;
  @Input()
  productPrice!: string;
  @Input()
  productDelivery!: string;
  @Input()
  productTotal!: string;
  @Input()
  vendor!: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
