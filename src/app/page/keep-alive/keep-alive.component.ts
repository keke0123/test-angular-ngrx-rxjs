import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-keep-alive',
  templateUrl: './keep-alive.component.html',
  styleUrls: ['./keep-alive.component.scss']
})
export class KeepAliveComponent implements OnInit {

  constructor(
    router: Router,
  ) {
  }

  ngOnInit() {
  }

  changeTabs(tab) {
    console.log(tab);
  }

}
