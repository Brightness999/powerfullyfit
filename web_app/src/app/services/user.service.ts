import { Injectable } from "@angular/core";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

import jwt_decode from "jwt-decode";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public currentUser: any = null;
  public updatedUser = new BehaviorSubject<any>(null);

  constructor(private backendProxy: BackendProxy) {}

  login(login: any) {
    return this.backendProxy
      .post("auth/login", login)
      .pipe(
        map((res: any) => {
          localStorage.setItem("token", res.access_token);

          let decoded: any = jwt_decode(res.access_token);

          this.currentUser = decoded.user;

          return decoded.user;
        })
      );
  }

  updateUser(id: number, data: any) {
    return this.backendProxy
      .patch(`user/${id}`, data)
      .pipe(
        map((res: any) => {
          if(res !== 'Failed to update user') {
            localStorage.setItem("token", res.access_token);
            let decoded: any = jwt_decode(res.access_token);

            let user = decoded.user;

            this.currentUser = user;
            this.updatedUser.next(user);
  
            return user;
          }
          else return 'Failed to update user';
        })
      );
  }

  
}
