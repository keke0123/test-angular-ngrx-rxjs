import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromExStore from '../../store/ex/reducers';
import * as authActions from '../../store/ex/auth.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  auth$: Observable<string>;

  constructor(
    private store: Store<fromExStore.State>
  ) {
  }

  ngOnInit() {
    // this.store.dispatch(new authActions.LoadAuths());
    this.store.dispatch(new authActions.SetAuths('hello'));
    console.log(new authActions.LoadAuths());
    this.auth$ = this.store.pipe(select(fromExStore.exStoreFeatureKey, 'auth', 'userName'));
    // 아래와 같이 꺼내오면 foreach 로 한번 더 꺼내야된다.
    // this.store$ = this.store.pipe(select(fromExStore.exStoreFeatureKey));
    // this.store$.forEach((x) => {
    //   console.log(x);
    // });
  }

  setName(name) {
    this.store.dispatch(new authActions.SetAuths(name));
  }

}
