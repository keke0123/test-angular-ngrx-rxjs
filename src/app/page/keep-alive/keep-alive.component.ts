import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Observable, fromEvent, Subscriber, Subject} from 'rxjs';
import {filter, map, takeUntil} from 'rxjs/operators';
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
  // public tab$: Observable<any>;
  public activeTab;
  public tabSubscriber$;
  // destroy
  destroy$: Subject<boolean> = new Subject<boolean>();

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
    // this.activeTab = this.store.select(fromTabStore.tabStoreFeatureKey, 'tab');
    // console.log('active tab', this.activeTab);
    // 아래처럼 구독 해놓고 계속 subscribe 로 연결시켜주면 store 의 값이 업데이트될때마다 실행되는듯 하다.
    this.store.select(fromTabStore.tabStoreFeatureKey, 'tab', 'activeTab')
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((val) => {
        console.log('val', val);
      });
    // this.store.dispatch(new tabActions.LoadTabs());
    // activeTab from store

    // url
    this.router.events.pipe(
      filter((val) => {
        return val instanceof NavigationEnd;
      })
      ,takeUntil(this.destroy$)
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
    // this.scopeUrl$.unsubscribe();
    // this.tabSubscriber$.unsubscribe();
    // destroy / 이런식으로 만들어 주면 될듯 하다. 아무래도 찌꺼기가 남을거 같긴 하지만
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  changeTabs(tab) {
    console.log(tab);
  }

}
