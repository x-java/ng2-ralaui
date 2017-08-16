import { Injectable } from '@angular/core';

@Injectable()
export class PromptService {

  constructor() { }

  isShow: boolean = false;

  promptText: string;

  show(bool: boolean, text: string): void {
  	this.isShow = bool;
  	this.promptText = text || '';
  }


}
