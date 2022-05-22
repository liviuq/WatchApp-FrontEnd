import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seller-profile-product-card',
  templateUrl: './seller-profile-product-card.component.html',
  styleUrls: ['./seller-profile-product-card.component.css']
})
export class SellerProfileProductCardComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
