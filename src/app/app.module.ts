import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoFromSkuComponent } from './demo-form-sku.component';
import { DemoFormSkuBuilderComponent } from './demo-form-sku-builder.component';
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFromSkuComponent,
    DemoFormSkuBuilderComponent,
    DemoFormWithValidationsExplicitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
