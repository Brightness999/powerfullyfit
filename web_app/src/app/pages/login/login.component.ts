import { Component, OnInit, OnDestroy } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";

import { UserService } from "@pf/services/user.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  formError: boolean = false;

  loginForm: FormGroup = this.formBuilder.group({
    username: [
      "",
      [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      ],
    ],
    password: [null, Validators.required],
  });

  constructor(
    private readonly userService: UserService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  login(loginForm: any) {
    this.userService.login(loginForm).subscribe(
      (res) => {
        this.router.navigate(["dashboard"], { replaceUrl: true });
      },
      (err) => {
        this.formError = true;
      }
    );
  }

  ngOnDestroy() {}
}
