import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';



@Injectable()
export class TestEffectEffects {

  @Effect() login$ = this.actions$
    .pipe(
      // map((state) => {
      //   console.log('state', state);
      // }),
      ofType('[Auth] Load Auths'),
      // map((action) => {
      //   console.log('test effect');
      //   console.log(action);
      //   return action;
      // })
      // mergeMap((state) => {
      //   console.log('merge map', state);
      //   return state;
      // }),
      switchMap((payload) => {
        console.log(payload);
        return this.http.get('http://54.180.32.46/api/test')
            .pipe(
              map((res) => {
                console.log('http res', res);
                return {
                  type: '[Auth] Set Auths',
                  payload: '...'
                };
              }),
              catchError((res) => {
                return EMPTY;
              })
            );
      })
      // map((action, index) => {
      //   console.log('action', action);
      //   console.log('state', index);
      //   return this.http.get('http://54.180.32.46/api/test')
      //     .pipe(
      //       map((res) => {
      //         console.log('http res', res);
      //         return {
      //           type: '[Auth] Set Auths',
      //           payload: res['userName']
      //         };
      //       }),
      //       catchError((res) => {
      //         return EMPTY;
      //       })
      //     )
      // })
    )

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {
    // console.log(actions$);
  }

}
