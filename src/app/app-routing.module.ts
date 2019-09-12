import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './page/test/test.component';
import {KeepAliveComponent} from './page/keep-alive/keep-alive.component';
import {Input1Component} from './page/keep-alive/input1/input1.component';
import {Input2Component} from './page/keep-alive/input2/input2.component';
import {Input3Component} from './page/keep-alive/input3/input3.component';
import {MainComponent} from './page/main/main.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
