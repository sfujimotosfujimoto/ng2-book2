import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class SpotifyService {
  static BASE_URL: string = 'https://api.spotify.com/v1';

  constructor(public http: Http) { }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL: string = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }

    return this.http.request(queryURL).map((res: any) => res.json());
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }



  // searchByTrack(query: string) {
  //   let params: string = [
  //     `q=${query}`,
  //     `type=track`
  //   ].join("&");
  //   let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
  //   return this.http.request(queryURL).map(
  //     res => res.json()
  //   );
  // }
}
