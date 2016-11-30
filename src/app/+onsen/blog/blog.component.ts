import { Component, OnInit } from '@angular/core';
import { AfterViewInit,onsNotification,onsPlatform } from 'angular2-onsenui'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.styl']
})
export class BlogComponent implements OnInit,AfterViewInit  {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this._navigator.element.pushPage(componentPage, { animation: 'fade' });
    onsNotification.alert('Hello World');
  }

}
