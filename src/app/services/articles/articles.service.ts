import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<any> {
    return this.http
            .get<any>('https://api.spaceflightnewsapi.net/v4/articles/');
  }

}
