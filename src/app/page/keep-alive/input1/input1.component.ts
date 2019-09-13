import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.scss']
})
export class Input1Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
