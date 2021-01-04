import { Component, OnInit } from "@angular/core";
import { OrganizationService } from "@pf/services/organization.service";
import { UserService } from "@pf/services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "argon-dashboard-angular";

  user;

  constructor(
    private organizationService: OrganizationService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.organizationService.login().subscribe((res) => {
      console.log(res);
      // this.router.navigate(["dashboard"]);
    });
  }
}
