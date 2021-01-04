import { Component, OnInit, OnDestroy } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";

import { UserService } from "@pf/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = {
      username: "head@coach.com",
      password: "12345",
    };

  constructor(
    private readonly userService: UserService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  login() {



    this.userService.login(this.loginForm).subscribe((res) => {
      this.router.navigate(["dashboard"]);
    });
  }

  ngOnDestroy() {}
}
