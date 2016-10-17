import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'demo-form-sku-builder',
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Demo Form: Sku with Builder</h2>
    <form 
      [formGroup]="myForm"
      (ngSubmit)="onSubmit(myForm.value)"
      class="ui form">
      <div class="field">
        <label for="skuInput">SKU</label>
        <input 
          type="text"
          id="skuInput"
          placeholder="SKU"
          [formControl]="myForm.controls['sku']">
      </div>
      <button type="submit" class="ui button">Submit</button>
    </form>
  </div>
  `,
  styles: []
})
export class DemoFormSkuBuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required ]
    });
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
