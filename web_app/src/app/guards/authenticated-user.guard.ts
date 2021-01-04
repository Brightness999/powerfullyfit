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
