import { Injectable } from "@angular/core";

import { BackendProxy } from "./backend.proxy";
import { UserService } from "./user.service";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  constructor(
    private backendProxy: BackendProxy,
    private userService: UserService
  ) {}

  findAllOrganizations() {
    return this.backendProxy.get(this.backendProxy.remoteUrl + "organization");
  }

  findOrganizationById(organizationId: string | number) {
    return this.backendProxy.get(
      this.backendProxy.remoteUrl + "organization/" + organizationId.toString()
    );
  }

  login() {
    let login = {
      username: "head@coach.com",
      password: "12345",
    };

    return this.backendProxy
      .post(this.backendProxy.remoteUrl + "auth/login", login)
      .pipe(
        map((res: any) => {
          localStorage.setItem("token", res.access_token);

          let decoded: any = jwt_decode(res.access_token);

          this.userService.currentUser = decoded.user;

          return decoded.user;
        })
      );
  }
}
