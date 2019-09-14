import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromTabStore from '../../../store/tab/reducers';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {filter, map, take, takeUntil} from 'rxjs/operators';
import * as tabActions from '../../../store/tab/tab.actions';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.scss']
})
export class Input1Component implements OnInit {

  @ViewChildren('input') input;

  public componentId: string;

  // destroy
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private store: Store<fromTabStore.State>
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // store 에 key 값으로 저장할 componentId 생성
    let urlArray = this.router.url.split('/');
    this.componentId = urlArray[urlArray.length - 1];
    // console.log('url', urlArray);
    // console.log('componentId', this.componentId);

    // 한번만 값을 받아온다.
    this.store.select(fromTabStore.tabStoreFeatureKey, 'tab', 'formData')
      .pipe(
        take(1),
        // takeUntil(this.destroy$)
      )
      .subscribe((val) => {
        console.log('formData', val);
        if(Object.keys(val).indexOf(this.componentId) >= 0) {
          // view 에 값을 입힌다.
          this.input.forEach((el) => {
            console.log(el);
            let id = el.nativeElement.id;
            el.nativeElement.value = val[this.componentId][id];
          });
        }
      });
  }

  ngOnDestroy() {
    console.log('destroy');
    // destroy / 이런식으로 만들어 주면 될듯 하다. 아무래도 찌꺼기가 남을거 같긴 하지만
    // this.destroy$.next(true);
    // this.destroy$.unsubscribe();

    // 종료시킬때 값을 입력한다.
  }

  testBtnClicked() {
    this.input.forEach((val) => {
      console.log(val);
      console.log(val.nativeElement.id);
      // 이런식으로 값을 입력시킨다.
      // val.nativeElement.value = '123123';
    })
  }

}


