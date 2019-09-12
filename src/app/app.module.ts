import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './page/test/test.component';
import { KeepAliveComponent } from './page/keep-alive/keep-alive.component';
import { Input1Component } from './page/keep-alive/input1/input1.component';
import { Input2Component } from './page/keep-alive/input2/input2.component';
import { Input3Component } from './page/keep-alive/input3/input3.component';
import { StoreModule } from '@ngrx/store';
import * as fromExStore from './store/ex/reducers';
import { MainComponent } from './page/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    KeepAliveComponent,
    Input1Component,
    Input2Component,
    Input3Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}), // root 는 하나 들어가야 에러가 안남, 아님 forfeature 대신 root 로 선언
    StoreModule.forFeature(fromExStore.exStoreFeatureKey, fromExStore.reducers, { metaReducers: fromExStore.metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
