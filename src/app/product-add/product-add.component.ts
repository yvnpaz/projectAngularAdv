import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers: [ProductService]
})
export class ProductAddComponent implements OnInit {

  public titleAddProduct: string;
  public product: Product;
  public filesToUpload: any;
  public isEdit;
  
  constructor(private _productService: ProductService,
    private _router: Router) {
    this.titleAddProduct = "Create new product";
    this.product = new Product(null, "", "", "0", "");
  }

  ngOnInit(): void {
    console.log("Component addProduct.ts loaded...");
    this.isEdit = false;
  }

  onSubmit() {
    console.log(this.product);

    if (this.filesToUpload && this.filesToUpload.length >= 1) {
      this._productService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload)
        .then((result: any) => {
          let res = JSON.parse(result);
          this.product.image = res.filename;

          this.saveProduct();
        },
          (err) => {
            console.log("Error upload image - OnSubmit()", err);
          });
    } else {
      this.saveProduct();
    }
  }

  saveProduct() {
    this._productService.addProduct(this.product).subscribe(
      result => {
        if (result !== null)
          this._router.navigate(['/products']);
      },
      err => {
        console.log("Message error" + err);
      });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log("Files uploaded... ", this.filesToUpload);
  }

}
