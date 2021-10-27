import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
const API_URL = environment.apiURL;

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  public GetProjects(): Observable<any> {
    return this.http.get(API_URL + "/projects");
  }

  public GetProject(slug: string): Observable<any> {
    const params = new HttpParams().append("slug", slug);
    return this.http.get(API_URL + "/projects", { params: params });
  }
}
