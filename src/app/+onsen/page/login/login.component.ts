import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnsenSetting } from '../../onsen-setting.component';
import { User } from './user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  target: string = '';
  model: User;

  constructor(public router: Router, public loginService: LoginService) { }

  ngOnInit() {
    console.log();
  }

  onClick() {
    this.loginService.userLogin().subscribe((term) => {
      if (this.username == term[0].username && this.password == term[0].password) {
        ons.notification.alert('Congratulations!').then(() => {
          this.router.navigate([OnsenSetting.base + 'blog']);
        });
      }else{
        ons.notification.alert('Incorrect username or password.');
      }
    })
  }

}
