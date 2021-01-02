import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry, map } from "rxjs/operators";

const headers = new HttpHeaders();

headers.append("Content-Type", "application/json");

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  configUrl = "http://localhost:3001/api/";

  constructor(private http: HttpClient) {}

  findAllOrganizations() {
    return this.http.get(this.configUrl + "workout", {
      withCredentials: true,
      observe: "response",
    });
    // .pipe(map((response) => response.body));
  }

  findOrganizationById(organizationId: string | number) {
    return this.http.get(
      this.configUrl + "organization/" + organizationId.toString(),
      {
        withCredentials: true,
        observe: "response",
      }
    );
  }

  login() {
    return this.http.post(
      this.configUrl + "auth/login",
      {
        username: "Admin",
        password: "12345",
      },
      {
        withCredentials: true,
        observe: "response",
      }
    );
  }
}
