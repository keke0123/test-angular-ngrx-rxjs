import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Observable, fromEvent, Subscriber} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import * as fromTabStore from '../../store/tab/reducers';
import * as tabActions from '../../store/tab/tab.actions';

@Component({
  selector: 'app-keep-alive',
  templateUrl: './keep-alive.component.html',
  styleUrls: ['./keep-alive.component.scss']
})
export class KeepAliveComponent implements OnInit {

  public tabArray: Array<string> = [];
  public scopeUrl$;
  // public scopeUrl$: Subscriber<any>;
  public url: string;
  public activeTab;

  constructor(
    private router: Router,
    private store: Store<fromTabStore.State>
  ) {

  }

  ngOnInit() {
    // css test
    this.tabArray.push('input1');
    this.tabArray.push('input2');
    // console.log(this.tabArray);
    // css test

    // activeTab from store
    this.activeTab = this.store.select(fromTabStore.tabStoreFeatureKey, 'tab');
    console.log('active tab', this.activeTab);

    // url
    this.scopeUrl$ = this.router.events.pipe(
      filter((val) => {
        return val instanceof NavigationEnd;
      })
    )
      .subscribe((val) => {
        console.log(val['url']);
      });
    // url

    // console.log(typeof this.scopeUrl$);
    console.log(this.scopeUrl$);
  }

  ngOnDestroy() {
    console.log('destroy');
    this.scopeUrl$.unsubscribe();
  }

  changeTabs(tab) {
    console.log(tab);
  }

}
