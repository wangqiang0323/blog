import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { User } from './login' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  interests = ['basketball','football'];
  companies = ['onsen','vkrms']

  model = new User(1,'wangqiang','1','13825219593',this.companies[0],this.interests[0]);

  constructor(public router:Router) { }

  ngOnInit() {

  }

  submitted = false;

  onSubmit() { 
    this.goto(this.model.company);
    this.submitted = true; 
  }

  goto(params){
    this.router.navigate([params,this.model]);
  }

}
