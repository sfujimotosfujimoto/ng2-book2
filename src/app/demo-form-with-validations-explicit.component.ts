import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'demo-form-with-validations-explicit',
  template: `
    <div class="ui raised segment">
    <h2 class="ui header">Demo Form: with validations (explicit)</h2>
    <form 
      [formGroup]="myForm"
      (ngSubmit)="onSubmit(myForm.value)"
      class="ui form">
      <div 
        class="field"
        [class.error]="!sku.valid && sku.touched">
        <label for="skuInput">SKU</label>
        <input 
          type="text"
          id="skuInput"
          placeholder="SKU"
          [formControl]="sku">
        <div 
          *ngIf="!sku.valid && sku.dirty"
          class="ui error message">SKU is invalid</div>
        
        <div
          *ngIf="sku.hasError('required') && sku.dirty"
          class="ui error message">SKU is required</div>
          
         <div
          *ngIf="sku.hasError('invalidSku') && sku.dirty"
          class="ui error message">SKU must begin with <span>123</span></div>
        
        
        </div>
        
        
        <div
          *ngIf="!myForm.valid  && sku.dirty"
          class="ui error message">Form is invalid</div>
        <button type="submit" class="ui button">Submit</button>
      
    </form>
  </div>
  `,
  styles: []
})
export class DemoFormWithValidationsExplicitComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, this.skuValidator
      ])]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value);
      }
    )

    this.myForm.valueChanges.subscribe(
      (value: string) => {
        console.log('form changed to: ', value);
      }
    )
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
  }

  ngOnInit() {
  }
}
