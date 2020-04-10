import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-angular',
  templateUrl: './app-angular.component.html',
  styleUrls: ['./app-angular.component.css']
})
export class AppAngularComponent implements OnInit {

  title = "Course Angular 4";

  constructor() { }

  ngOnInit(): void {
  }

}
