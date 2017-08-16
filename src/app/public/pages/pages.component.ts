import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { PromptService } from '../prompt/prompt.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  /* 请求地址(必填) */
  @Input()
  url: string;

  /* 请求参数(可选) */
  @Input()
  query;

  /* 接收属性(必填) */
  @Input()
  value;

  /* 返回结果 */
  @Output()
  valueChange: EventEmitter<any> = new EventEmitter();

  /* 请求事件流 */
  private resultObservable: Observable<any>;

  constructor(public http: HttpClient, public promptService: PromptService) {
  }

  ngOnInit() {
    this.queryDatas(1);
  }

  private isLoading: boolean = false;
  public result: any;
  queryDatas(page: number): void{
    this.isLoading = true;
    this.resultObservable = this.http.get('/api/list?pageNo=' + page);
    this.resultObservable.subscribe(
      result => {
        setTimeout( () => {
          this.result = result;
          this.valueChange.emit(this.result);
          this.isLoading = false;
        }, 1500)
      }
    )

    // 测试提示框
    this.promptService.show(true, '这是分页组件的提示内容');

  }

}
