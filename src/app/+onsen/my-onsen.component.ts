import { Component } from '@angular/core';


@Component({
  selector: 'my-onsen',
  templateUrl: './my-onsen.component.html',
  styleUrls: ['./my-onsen.component.styl']
})
export class MyOnsenComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Onsen` component');
  }

  onClick() {
    ons.notification.confirm('ok');
  }

}