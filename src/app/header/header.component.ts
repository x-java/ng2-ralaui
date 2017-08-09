import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('search', [
      state('on', style({
        width: '180px'
      })),
      state('off', style({
        width: '0'
      })),
      transition('* => *', animate(150))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* 搜索 */
  private searchAnimate: string = 'off';
  searchShow(): void{
    if(this.searchAnimate == 'on'){
      this.searchAnimate = 'off'
    }else{
      this.searchAnimate = 'on';
    }
  }
  searchChange(value: string): void{
    console.log(`您要搜索的内容是：${value}`);
  }

}
