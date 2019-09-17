import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  constructor(
    private http: HttpClient
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
  }

}
