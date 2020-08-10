import { NgModule } from '@angular/core';
import { EndpageV2Component } from './endpage-v2.component';
import { EndPageComponent } from './end-page/end-page.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [EndpageV2Component, EndPageComponent],
  imports: [
    CommonModule
  ],
  exports: [EndpageV2Component, EndPageComponent]
})
export class EndpageV2Module { }
