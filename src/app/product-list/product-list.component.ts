import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public product:string;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router
  ) {
    this.product = "Product list";
   }

  ngOnInit(): void {
    console.log('Product list component loaded.');
  }

}
