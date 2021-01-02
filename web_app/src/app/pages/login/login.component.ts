import { Component, OnInit, OnDestroy } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";

import { OrganizationService } from "@pf/services/organization.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private readonly organizationService: OrganizationService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.organizationService.login().subscribe((res) => {
      console.log(res);
      this.router.navigate(["dashboard"]);
    });
  }

  ngOnDestroy() {}
}
