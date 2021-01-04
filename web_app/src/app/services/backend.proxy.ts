import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry, map } from "rxjs/operators";

const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

@Injectable({
  providedIn: "root",
})
export class BackendProxy {
  configUrl = "http://localhost:3000/api/";
  remoteUrl = "http://66.42.110.119:3000/api/";

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url, { headers });
  }

  post(url: string, body: any) {
    return this.http.post(url, body, { headers });
  }

  patch(url: string, body: any) {
    return this.http.patch(url, { headers });
  }

  put(url: string, body: any) {
    return this.http.put(url, { headers });
  }

  delete(url: string) {
    return this.http.delete(url, { headers });
  }
}
