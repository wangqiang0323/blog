import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  @Output() pagetitle: String;

  constructor() { }

  ngOnInit() {
    this.pagetitle = 'home'
  }

}
