import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EndpageV2Module } from '../../projects/endpage-v2/src/lib/endpage-v2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EndpageV2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
