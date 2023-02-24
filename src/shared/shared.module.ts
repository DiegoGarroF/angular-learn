import { NgModule } from '@angular/core';
import { FormExample } from './form/form.component';
import { RemoveNumbersDirective } from "./directives/remove-numbers.directive";
@NgModule({
  declarations: [
    FormExample,
    RemoveNumbersDirective
  ],
  imports: [
  ],
  exports: [FormExample]
})
export class SharedModule { }
