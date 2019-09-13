import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-keep-alive',
  templateUrl: './keep-alive.component.html',
  styleUrls: ['./keep-alive.component.scss']
})
export class KeepAliveComponent implements OnInit {

  public tabArray: Array<string> = [];
  public scopeUrl$: any;

  constructor(
    private router: Router,
  ) {
    this.scopeUrl$ = fromEvent(window, 'hashchange').subscribe(() => {
      console.log('url changed');
    });
  }

  ngOnInit() {
    this.tabArray.push('input1');
    this.tabArray.push('input2');

    console.log(this.tabArray);
  }

  changeTabs(tab) {
    console.log(tab);
  }

}
