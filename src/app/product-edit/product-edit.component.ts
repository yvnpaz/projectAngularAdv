import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'app-product-edit',
  // templateUrl: './product-edit.component.html',
  templateUrl: '../product-add/product-add.component.html',
  styleUrls: ['./product-edit.component.css'],
  providers: [ProductService]
})
export class ProductEditComponent implements OnInit {

  public titleAddProduct: string;
  public product: Product;
  public filesToUpload;
  public resultUpload;
  public isEdit;

  constructor(private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.titleAddProduct = "Edit Product";
  }

  ngOnInit(): void {
    console.log("Product-edit.ts loaded...");
    this.product = new Product("", "", "", "", "");
    this.getOneProduct();
    this.isEdit = true;
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

  editProduct() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      
      this._productService.editProduct(id, this.product).subscribe(
        result => {
          if (result !== null)
            this._router.navigate(['/product', id]);
          else
            console.log(result);
        },
        error => {
          console.log("Message error edit: " + error.message);
        });
    });
  }

  onSubmit() {
    if (this.filesToUpload && this.filesToUpload.length >= 1) {
      this._productService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload)
        .then((result: any) => {
          let res = JSON.parse(result);
          this.product.image = res.filename;
          // edit product
          this.editProduct();
        },
          (err) => {
            console.log("Error upload image - OnSubmit()", err);
          });
    } else {
      this.editProduct();
    }
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log("Files edit uploaded... ", this.filesToUpload);
  }

}
