import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  private hasFocus: number;
  public navItems: any[] = [
    {
      title: '欢迎页',
      url: '/welcome'
    },
    {
      title: 'demo',
      list: [
        {
          title: '列表页',
          url: '/list'
        },
        {
          title: '详情页',
          url: '/details'
        },
      ]
    }
  ];

  clickNav(i: number): void {
    if(this.navItems[i].list && this.hasFocus == i){
      this.hasFocus = -1;
    }else if(this.navItems[i].list){
      this.hasFocus = i;
    }else{
      this.hasFocus = i;
      this.router.navigate([this.navItems[i].url]);
    }
  }

  ngOnInit() {
  }

}
