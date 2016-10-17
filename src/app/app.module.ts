import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoFromSkuComponent } from './demo-from-sku.component';
import { DemoFormSkuBuilderComponent } from './demo-form-sku-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFromSkuComponent,
    DemoFormSkuBuilderComponent,
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
