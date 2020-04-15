import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  public titleProduct:string;
  public products:Product[];

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _productService: ProductService
  ) {
      this.titleProduct = "List of products"
   }

  ngOnInit(): void {

    this._productService.getProduct().subscribe(
      result => {
        this.products = result.data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
