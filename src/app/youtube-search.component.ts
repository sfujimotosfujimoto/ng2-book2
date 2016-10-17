import { Component, OnInit, Input } from '@angular/core';
import {SearchResult} from "./search-result.model";

@Component({
  selector: 'youtube-search',
  template: `
    <div class="container">
      <div class="page-header">
        <h1>YouTube Search </h1>
        <h3 *ngIf="loading">LOADING...</h3>
      </div>
      <div class="row">
        <div class="input-group input-group-lg col-md-12">
          
          <search-box
            (loading)="loading = $event"
            (results)="updateResults($event)"
          ></search-box>
        </div>
      </div>
      
      <div class="row">
        <search-result
          *ngFor="let result of results"
          [result]="result"
        ></search-result>
      </div>
    </div>
  `,
  styles: []
})
export class YoutubeSearchComponent implements OnInit {
  @Input() results: SearchResult[];

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }

  constructor() { }

  ngOnInit() {
  }

}
