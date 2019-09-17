import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TestApiService} from '../../service/api/testApi/test-api.service';

import {Store} from '@ngrx/store';
import * as fromExStore from '../../store/ex/reducers';
import * as authActions from '../../store/ex/auth.actions';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  public apiService: TestApiService;

  constructor(
    private http: HttpClient,
    private store: Store<fromExStore.State>
  ) { }

  ngOnInit() {
    let test = this.http.get('http://54.180.32.46/cors');
    test.subscribe((val) => {
      console.log(val);
    });
    // test.toPromise()
    //   .then((val) => {
    //     console.log(val);
    //   });

    //
    this.apiService = new TestApiService(this.http);
  }

  testApi() {
    console.log('service call');
    let temp = this.apiService.getTest();
    temp.subscribe((res) => {
      console.log(res);
    })
  }

  testEffect() {
    this.store.dispatch(new authActions.LoadAuths());
    // this.store.select(fromExStore.exStoreFeatureKey, 'auth', 'userName')
    //   .subscribe((val) => {
    //     console.log('select userName');
    //     console.log(val);
    //   });
  }
}
