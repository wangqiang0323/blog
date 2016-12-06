import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnsenSetting } from '../../onsen-setting.component'

@Component({
  selector: 'type',
  styleUrls: ['./type.component.styl'],
  templateUrl: './type.component.html'
})
export class TypeComponent {
  constructor(public router:Router) {

  }

  ngOnInit() {
    console.log('hello `Type` component');
  }

  onClick() {
    ons.notification.confirm('ok');
    this.router.navigate([OnsenSetting.base+'blog']);
  }

}
