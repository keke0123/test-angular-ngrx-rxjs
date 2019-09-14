import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular-ngrx-rxjs';

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    // refresh 시 홈으로
    this.router.navigate([''])
  }
}
