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
import * as fromTabStore from './store/tab/reducers';
import { AuthComponent } from './page/auth/auth.component';
import { Auth1Component } from './page/auth/auth1/auth1.component';
import { HttpComponent } from './page/http/http.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TestEffectEffects } from './effects/test/test-effect.effects';
import {TestService} from './service/interceptor/test/test.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    KeepAliveComponent,
    Input1Component,
    Input2Component,
    Input3Component,
    MainComponent,
    AuthComponent,
    Auth1Component,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}), // root 는 하나 들어가야 에러가 안남, 아님 forfeature 대신 root 로 선언
    StoreModule.forFeature(fromExStore.exStoreFeatureKey, fromExStore.reducers, { metaReducers: fromExStore.metaReducers }),
    StoreModule.forFeature(fromTabStore.tabStoreFeatureKey, fromTabStore.reducers, { metaReducers: fromTabStore.metaReducers }),
    HttpClientModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TestEffectEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TestService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
