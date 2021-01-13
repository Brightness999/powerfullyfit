import { Injectable } from "@angular/core";

// const process = require("process");

import * as process from "process";

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
  configUrl = "http://localhost:4000/api/";
  dockerUrl = `/api/`;
  remoteUrl = "http://66.42.110.119/api/";

  url = this.dockerUrl;

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(this.url + url, { headers });
  }

  post(url: string, body: any) {
    console.log(process.env.HOSTNAME);
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
