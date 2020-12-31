import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  configUrl = "http://66.42.110.119:3000/api/";

  constructor(private http: HttpClient) {}

  findAllOrganizations() {
    return this.http.get(this.configUrl + "workout");
  }

  findOrganizationById(organizationId: string | number) {
    return this.http.get(
      this.configUrl + "organization/" + organizationId.toString()
    );
  }

  login() {
    return this.http.post(this.configUrl + "auth/login", {
      username: "Admin",
      password: "12345",
    });
  }
}
