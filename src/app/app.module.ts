import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './page/test/test.component';
import { KeepAliveComponent } from './page/keep-alive/keep-alive.component';
import { Input1Component } from './page/keep-alive/input1/input1.component';
import { Input2Component } from './page/keep-alive/input2/input2.component';
import { Input3Component } from './page/keep-alive/input3/input3.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    KeepAliveComponent,
    Input1Component,
    Input2Component,
    Input3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
