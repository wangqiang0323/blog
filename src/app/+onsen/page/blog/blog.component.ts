import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AfterViewInit,onsNotification,onsPlatform } from 'angular2-onsenui';
import { OnsenSetting } from '../../onsen-setting.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.styl']
})
export class BlogComponent implements OnInit,AfterViewInit  {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this._navigator.element.pushPage(componentPage, { animation: 'fade' });
    // onsNotification.alert('Hello World');
  }

  back() {
    this.router.navigate([[OnsenSetting.base+'blog']])
  }

}
