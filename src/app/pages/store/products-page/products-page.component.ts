import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {
  public busy = false;

  public products$: Observable<Product[]>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.busy = true;
    this.products$ = this.data.getProducts();
  }

}
