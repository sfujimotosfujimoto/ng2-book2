import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {YoutubeService} from './youtube.service';

@Component({
  selector: 'simple-http',
  template: `
    <h2>Basic Request</h2>
    <button type="button" (click)="makeRequest()" class="ui button">Make Request</button>
    <div *ngIf="loading">loading...</div>
    <pre>{{ data | json }}</pre>
  `,
  styles: []
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(public http: Http, private youtubeService: YoutubeService) {
  }

  makeRequest(): void {
    this.loading = true;

    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
