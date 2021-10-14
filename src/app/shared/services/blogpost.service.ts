import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  constructor(private http: HttpClient) {}

  public GetBlogposts(): Observable<any> {
    return this.http.get('http://localhost:1337/blogposts');
  }

  public GetBlogpost(slug: string): Observable<any> {
    const params = new HttpParams().append('slug', slug);
    return this.http.get('http://localhost:1337/blogposts', { params: params });
  }
}
