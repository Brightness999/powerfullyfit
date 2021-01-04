import { Component } from "@angular/core";
import { OrganizationService } from "@pf/services/organization.service";
import { UserService } from "@pf/services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Powerfully Fit";

  constructor() {}
}
