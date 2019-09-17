import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './page/test/test.component';
import {KeepAliveComponent} from './page/keep-alive/keep-alive.component';
import {Input1Component} from './page/keep-alive/input1/input1.component';
import {Input2Component} from './page/keep-alive/input2/input2.component';
import {Input3Component} from './page/keep-alive/input3/input3.component';
import {MainComponent} from './page/main/main.component';
import {AuthComponent} from './page/auth/auth.component';
import {TestGuard} from './guard/test/test.guard';
import {Auth1Component} from './page/auth/auth1/auth1.component';
import {HttpComponent} from './page/http/http.component';


const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'keep-alive',
    component: KeepAliveComponent,
    children: [
      {
        path: '',
        redirectTo: 'input1',
        pathMatch: 'full'
      },
      {
        path: 'input1',
        component: Input1Component,
      },
      {
        path: 'input2',
        component: Input2Component,
      },
      {
        path: 'input3',
        component: Input3Component,
      }
    ]
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [TestGuard],
    canActivateChild: [TestGuard],
    children: [
      {
        path: 'auth1',
        component: Auth1Component
      }
    ]
  },
  {
    path: 'http',
    component: HttpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
