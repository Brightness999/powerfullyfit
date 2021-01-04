import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry, map } from "rxjs/operators";

const headers = new HttpHeaders();

// headers.append("Content-Type", "application/json");
headers.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBZG1pbiIsImxhc3RuYW1lIjoiRml0IiwiZW1haWwiOiJhZG1pbkBmaXQuY29tIiwiY3JlYXRlVGltZSI6IjIwMjEtMDEtMDNUMDQ6NDQ6MjQuMTE1WiIsInJvbGUiOiJTVVBFUiBBRE1JTiIsIm9yZ2FuaXphdGlvbiI6bnVsbH0sImlhdCI6MTYwOTcyMzQ0N30.4JAeTfKcaVOPQPBLwHGP1WmIlmdFLkET78FbMGI2ajA"
);

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  configUrl = "http://localhost:3000/api/";
  remoteUrl = "http://66.42.110.119:3000/api/";

  constructor(private http: HttpClient) {}

  findAllOrganizations() {
    return this.http.get(this.remoteUrl + "workout", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBZG1pbiIsImxhc3RuYW1lIjoiRml0IiwiZW1haWwiOiJhZG1pbkBmaXQuY29tIiwiY3JlYXRlVGltZSI6IjIwMjEtMDEtMDNUMDQ6NDQ6MjQuMTE1WiIsInJvbGUiOiJTVVBFUiBBRE1JTiIsIm9yZ2FuaXphdGlvbiI6bnVsbH0sImlhdCI6MTYwOTcxNzM3M30.EZw0p8umcu3IQbJ1ttX02xpCZI78OdtTCPq58dlGjBU",
      },
    });
    // .pipe(map((response) => response.body));
  }

  findOrganizationById(organizationId: string | number) {
    return this.http.get(
      this.remoteUrl + "organization/" + organizationId.toString(),
      { headers }
    );
  }

  login() {
    return this.http.post(this.remoteUrl + "auth/login", {
      username: "Admin",
      password: "12345",
    });
  }
}
