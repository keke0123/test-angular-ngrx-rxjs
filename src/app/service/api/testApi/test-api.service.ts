import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import * as fromExStore from '../../../store/ex/reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as authActions from '../../../store/ex/auth.actions';

import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {
  // test 1
  // auth$: Observable<any>;

  constructor(
    private http: HttpClient,
    private store?: Store<fromExStore.State>,
    private actions$?: Actions,
  ) {
    // this.auth$ = this.store.select(state => state.auth);
  }

  // @Effect() login$ = this.actions$
  //   .pipe(
  //     ofType(authActions.AuthActionTypes.LoadAuths),
  //     map((action) => {
  //       console.log(action);
  //       return action;
  //     }),
  //     switchMap((payload) => {
  //       return this.http.get('http://54.180.32.46/cors')
  //         .pipe(
  //           map((res)=>{
  //             console.log(res);
  //           })
  //         );
  //       // return '';
  //     })
  //   )

  getTest() {
    return this.http.get('http://54.180.32.46/cors');
  }

  // test 1 / 아마 실패
  // serviceInit() {
  //   this.store.dispatch(new authActions.LoadAuths());
  // }

}
