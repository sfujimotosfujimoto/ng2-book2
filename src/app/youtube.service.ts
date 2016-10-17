import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {SearchResult} from "./search-result.model";

@Injectable()
export class YoutubeService {
  YOUTUBE_API_KEY: string = "AIzaSyC4ta9uaekyuT3c7eOlksa5ETU9t05V6eI";
  YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

  constructor(public http: Http) { }

  getApiKey(): string {
    return this.YOUTUBE_API_KEY;
  }

  getApiUrl(): string {
    return this.YOUTUBE_API_URL;
  }

  search(query: string): Observable<SearchResult[]> {
    let params: string = [
      `q=${query}`,
      `key=${this.getApiKey()}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    let queryUrl: string = `${this.getApiUrl()}?${params}`;
    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).items.map(item => {
          // console.log("raw item", item); // uncomment if you want to debug
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
  }



}
