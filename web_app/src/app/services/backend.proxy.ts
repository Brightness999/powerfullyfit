import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry, map } from "rxjs/operators";

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdG5hbWUiOiJIZWFkIiwibGFzdG5hbWUiOiJDb2FjaCIsImVtYWlsIjoidXNlckBjb2FjaC5jb20iLCJjcmVhdGVUaW1lIjoiMjAyMS0wMS0wNFQwMTo0ODozNi40OTJaIiwicm9sZSI6IkhFQUQiLCJvcmdhbml6YXRpb24iOnsiaWQiOjEsIm5hbWUiOiJGaXJzdCBPcmdhbml6YXRpb24iLCJjcmVhdGVUaW1lIjoiMjAyMS0wMS0wNFQwMTo0ODozNi40OTVaIn19LCJpYXQiOjE2MDk3Mjc1Mjh9.yeWvbSnVAlOhrYMqZpJT4Wknl-X3H9rCWju83Ug_86w",
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
