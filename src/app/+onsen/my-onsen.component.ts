import { Component } from '@angular/core';


@Component({
  selector: 'my-onsen',
  templateUrl: './my-onsen.component.html'
})
export class MyOnsenComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Onsen` component');
  }

}