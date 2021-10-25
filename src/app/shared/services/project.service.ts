import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  public GetProjects(): Observable<any> {
    return this.http.get("https://rocky-thicket-98404.herokuapp.com/projects");
  }

  public GetProject(slug: string): Observable<any> {
    const params = new HttpParams().append("slug", slug);
    return this.http.get("http://localhost:1337/projects", { params: params });
  }
}
