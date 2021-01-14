import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";

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
  url = environment.API_ENDPOINT;

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(this.url + url, { headers });
  }

  post(url: string, body: any) {
    return this.http.post(this.url + url, body, { headers });
  }

  patch(url: string, body: any) {
    return this.http.patch(this.url + url, { headers });
  }

  put(url: string, body: any) {
    return this.http.put(this.url + url, { headers });
  }

  delete(url: string) {
    return this.http.delete(this.url + url, { headers });
  }
}
