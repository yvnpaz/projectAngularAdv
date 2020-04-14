import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeTitle = "Home page";

  constructor() { }

  ngOnInit(): void {
    console.log("Component loaded.");
  }
}
