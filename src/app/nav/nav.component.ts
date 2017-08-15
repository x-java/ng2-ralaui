import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  /* 设置导航列表 */
  public navItems: any[] = [
    {
      title: '欢迎页',
      url: '/welcome',
      icon: 'icon-all'
    },
    {
      title: '模板',
      icon: 'icon-box',
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
    },
    {
      title: 'UI 元素',
      icon: 'icon-navlist',
      list: [
        {
          title: '表单',
          url: '/form'
        },
        {
          title: '表格',
          url: '/table'
        },
        {
          title: '按钮',
          url: '/button'
        },
        {
          title: '弹出层',
          url: '/alert'
        },
        {
          title: '分页',
          url: '/pages'
        },
        {
          title: '图标',
          url: '/iconfont'
        },
      ]
    }
  ];

  /* 点击一级菜单执行的方法 */
  private hasFocus: number = 1;
  clickNav(i: number): void {
    if(this.navItems[i].list && this.hasFocus == i){
      this.hasFocus = -1;
    }else if(this.navItems[i].list){
      this.hasFocus = i;
    }else{
      this.hasFocus = i;
      this.childFocus = '';
      this.router.navigate([this.navItems[i].url]);
    }
  }

  /* 通过设置 childFocus 的值为当前url 控制子级A标记的 active 样式 */
  private childFocus: string;
  listFocus(url: string): void{
    this.childFocus = url;
  }

  ngOnInit() {
  }

}