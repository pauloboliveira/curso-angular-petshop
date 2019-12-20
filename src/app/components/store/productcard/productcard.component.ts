import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product-card',
  templateUrl: './productcard.component.html'
})
export class ProductcardComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
