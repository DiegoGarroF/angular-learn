import {Component} from '@angular/core';
@Component({
  selector: 'form-basic-example',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss'],
})
export class FormExample {
  public name: string;
  constructor() {
    this.name = 'Mi nombre es Pedro 123';
  }
}