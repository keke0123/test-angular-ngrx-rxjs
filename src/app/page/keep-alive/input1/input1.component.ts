import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromTabStore from '../../../store/tab/reducers';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.scss']
})
export class Input1Component implements OnInit {

  @ViewChildren('input') input;

  constructor(
    private store: Store<fromTabStore.State>
  ) { }

  ngOnInit() {
    console.log('test', this.input);
  }

}


