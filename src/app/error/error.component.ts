import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public errorTitle: string;

  constructor() {
    this.errorTitle = "Error! Page not found!";
   }

  ngOnInit(): void {
    console.log("Error component.");
  }

}
