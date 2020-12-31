import { Component, OnInit, OnDestroy } from "@angular/core";
import { OrganizationService } from "@pf/services/organization.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private organizationService: OrganizationService) {}

  ngOnInit() {}

  login() {
    this.organizationService.login().subscribe((res) => {
      console.log(res);
    });
  }

  ngOnDestroy() {}
}
