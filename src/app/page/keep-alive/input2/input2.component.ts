import {Component, OnInit, ViewChildren} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromTabStore from '../../../store/tab/reducers';
import {take} from 'rxjs/operators';
import * as tabActions from '../../../store/tab/tab.actions';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.scss']
})
export class Input2Component implements OnInit {
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
    // console.log('destroy');

    // 종료시킬때 값을 입력한다.
    let form = {}
    this.input.forEach((el) => {
      console.log(el);
      form = {
        ...form,
        [el.nativeElement.id]: el.nativeElement.value,
      }
    });
    let action = {
      id: this.componentId,
      data: form
    }
    // console.log('form data', form);
    this.store.dispatch(new tabActions.SetFormData(action));
  }
}
