import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";

import { UserService } from "@pf/services/user.service";

import { Observable } from "rxjs";

import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthenticatedUserGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // localStorage.setItem(
    //   "token",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdG5hbWUiOiJIZWFkIiwibGFzdG5hbWUiOiJDb2FjaCIsImVtYWlsIjoidXNlckBjb2FjaC5jb20iLCJjcmVhdGVUaW1lIjoiMjAyMS0wMS0wNFQwMTo0ODozNi40OTJaIiwicm9sZSI6IkhFQUQiLCJvcmdhbml6YXRpb24iOnsiaWQiOjEsIm5hbWUiOiJGaXJzdCBPcmdhbml6YXRpb24iLCJjcmVhdGVUaW1lIjoiMjAyMS0wMS0wNFQwMTo0ODozNi40OTVaIn19LCJpYXQiOjE2MDk3Mjc1Mjh9.yeWvbSnVAlOhrYMqZpJT4Wknl-X3H9rCWju83Ug_86w"
    // );

    if (localStorage.getItem("token")) {
      let token: any = jwt_decode(localStorage.getItem("token"));
      let currentUser: any = token.user;
      this.userService.currentUser = currentUser;

      return true;
    }

    this.router.navigate(["login"]);

    return false;
  }
}
