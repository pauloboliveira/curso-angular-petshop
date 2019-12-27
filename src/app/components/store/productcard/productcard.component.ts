import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { CartUtil } from 'src/app/utils/cart.util';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './productcard.component.html'
})
export class ProductcardComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  addToCart(){
    CartUtil.add(
      this.product._id,
      this.product.title,
      1,
      this.product.price,
      this.product.images[0]
    )
    this.toastr.success(`${this.product.title} adicionado ao carrinho`, 'Produto adicionado')
  }

}
