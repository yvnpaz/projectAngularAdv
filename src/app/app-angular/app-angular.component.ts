import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'app-app-angular',
  templateUrl: './app-angular.component.html',
  styleUrls: ['./app-angular.component.css']
})
export class AppAngularComponent implements OnInit {

  title = "Course Angular 4";
  header_color:string;

  constructor() {
    this.header_color = GLOBAL.header_color;
   }

  ngOnInit(): void {
  }

}
