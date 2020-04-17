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

  public titleProduct: string;
  public products: Product[];
  public confirmed;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    this.titleProduct = "List of products";
    this.confirmed = null;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onDeleteProduct(id) {
    this._productService.deleteProduct(id).subscribe(
      result => {
        if (result !== null) {
          this.getProducts();
        }else{
          alert("Delete error");
        }
      },
      err => {
        console.log("Error message product list delete " + err.message);
      }
    );
  }

  deleteConfirmed(id){
    this.confirmed = id;
  }

  cancelConfirmed(){
    this.confirmed = null;
  }

  getProducts() {
    this._productService.getProducts().subscribe(
      result => {
        this.products = result.data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
