import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-vkrms',
  templateUrl: './vkrms.component.html',
  styleUrls: ['./vkrms.component.styl']
})
export class VkrmsComponent implements OnInit {
  name: string
  tel: string

  constructor(private activatedRoute: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
       this.name = params['name']; 
       this.tel = params['tel']
    });
  }

  logout(){
    this.router.navigate(['']);
  }

}
