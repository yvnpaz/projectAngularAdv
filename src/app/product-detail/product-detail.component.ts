import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  public product:Product;

  constructor(private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router) {

  }

  ngOnInit(): void {
    console.log("Product-detail.ts loaded...");
    this.getOneProduct();
  }

  getOneProduct() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._productService.getOneProduct(id).subscribe(
        response => {
          if (response.code == 200) {
            this.product = response.data;
          } else {
            this._router.navigate(['/products']);
          }
        },
        err => {
          console.log("Error Product-detail.ts " + <any>err);
        }
      );
    });
  }

}
