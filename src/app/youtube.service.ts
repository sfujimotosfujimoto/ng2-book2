import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {SearchResult} from "./search-result.model";

@Injectable()
export class YoutubeService {
  YOUTUBE_API_KEY: string = "AIzaSyD5oQy29-j7hANhU1IQB1vLx2PaUfbZ4yk";
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
      .map((res: Response) => {
        return (<any>res.json()).items.map(item => {
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
