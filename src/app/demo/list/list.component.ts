import { Component, OnInit, ViewChild } from '@angular/core';
import { PagesComponent } from '../../public/pages/pages.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(PagesComponent)
  private pages: PagesComponent;

  /* 查询条件 */
  public query: Query = new Query('', '', '');
  
  /* list集合 */
  private result: any;

  constructor() { }

  ngOnInit() {
    
  }

  $query(): void {
    this.pages.queryDatas(1);
  }

}

class Query {
  constructor(
    time: string,
    start: string,
    end: string
  ){}
}