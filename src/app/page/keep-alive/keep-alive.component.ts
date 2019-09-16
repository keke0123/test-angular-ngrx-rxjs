import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RouterOutlet} from '@angular/router';
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

  public urlNow: string = 'input1';
  public tabArray: Array<string> = [];
  // destroy
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private store: Store<fromTabStore.State>
  ) {
  }

  ngOnInit() {
    // activeTab from store
    // 아래처럼 구독 해놓고 계속 subscribe 로 연결시켜주면 store 의 값이 업데이트될때마다 실행되는듯 하다.
    this.store.select(fromTabStore.tabStoreFeatureKey, 'tab', 'activeTab')
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((val) => {
        // console.log('val', val);
        this.tabArray = val;
      });
    // activeTab from store

    // url
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter((val) => {
        return val instanceof NavigationEnd;
      })
    )
      .subscribe((val) => {
        let urlArray = val['url'].split('/');
        let url = urlArray[urlArray.length - 1];
        // console.log('url', url);
        if(this.tabArray.indexOf(url) >= 0) {
          // console.log('is be');
        } else {
          // console.log('is not be');
          this.store.dispatch(new tabActions.SetTabs(url));
        }
      });
    // url
  }

  ngOnDestroy() {
    console.log('destroy');
    this.store.dispatch(new tabActions.InitTabs());
    this.store.dispatch(new tabActions.InitFormData());
    // this.store.dispatch(new tabActions)
    // destroy / 이런식으로 만들어 주면 될듯 하다. 아무래도 찌꺼기가 남을거 같긴 하지만
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  changeTabs(tab) {
    // console.log('tab change', tab);
  }

  // outletInit(component) {
  //   console.log('router outlet init');
  //   console.log('component', component);
  //   if(component) {
  //     setTimeout(() => {
  //       console.log(component.input);
  //     },0)
  //     console.log(component.input);
  //     console.log(component.store);
  //   }
  // }

}
