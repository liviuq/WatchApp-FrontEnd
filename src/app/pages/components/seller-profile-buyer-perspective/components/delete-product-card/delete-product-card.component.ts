import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-product-card',
  templateUrl: './delete-product-card.component.html',
  styleUrls: ['./delete-product-card.component.css']
})
export class DeleteProductCardComponent implements OnInit {

  @Input()
  productName!: string;
  @Input()
  sellerName!: string;
  @Input()
  locationName!: string;
  @Input()
  date!: string;
  @Input()
  watchPrice!: string;
  @Input()
  watchYear!:string;
  @Input()
  productId!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
