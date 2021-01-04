import { Component, OnInit } from "@angular/core";

import { OrganizationService } from "@pf/services/organization.service";
import { UserService } from "@pf/services/user.service";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent implements OnInit {
  user;

  constructor(
    private organizationService: OrganizationService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.currentUser;
  }
}
