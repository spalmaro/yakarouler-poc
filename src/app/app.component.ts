import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'yr-poc';
  product;
  navbar;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    // this.product = this.http.get('/api/search/product/alternateur-valeo-437433');
    this.http.get('/api/search/product/alternateur-valeo-437433')
      .subscribe(el => this.product = el );

    this.http.get('http://yakarouler.local/header/top', {responseType: 'text'}).subscribe(res => {
      this.navbar = res;
      console.log(res);
    });
  }
}
