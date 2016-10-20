import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {SpotifyService} from "./spotify.service";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(
    private spotify: SpotifyService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route
      .queryParams
      .subscribe(params => {this.query = params['query'] || ''; });
  }

  ngOnInit() {
  }

}
