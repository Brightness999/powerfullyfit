import { Component, OnInit } from "@angular/core";

import { ToastrService } from "ngx-toastr";

import { OrganizationService } from "@pf/services/organization.service";
import { UserService } from "@pf/services/user.service";
import { MessageService } from "@pf/services/message.service";
import { NotificationsService } from "@pf/services/notifications.service";

import { take } from "rxjs/operators";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent implements OnInit {
  user: any;

  constructor(
    private organizationService: OrganizationService,
    private userService: UserService,
    private messageService: MessageService,
    private notificationsService: NotificationsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.user = this.userService.currentUser;

    // console.log(this.user);

    (<any>window).Intercom("boot", {
      app_id: "sgvd9vlh",
      name: this.user.firstname + " " + this.user.lastname,
      email: this.user.email,
    });

    this.notificationsService.notifications.subscribe((res) => {
      console.log(res);
      let result = JSON.parse(res);

      this.toastr
        .info(result.text)
        .onTap.pipe(take(1))
        .subscribe(() => this.toasterClickedHandler());
    });

    // show the message when client that isn't a selected client sends the message to user
    this.messageService.messages.subscribe((res) => {
      let result = JSON.parse(res);
      if(result.from.id !== this.user.id && result.to.id !== this.user.id) {
        this.toastr
          .success(result.text)
          .onTap.pipe(take(1))
          .subscribe(() => this.toasterClickedHandler());
      }
    });

    // when socket is connected, 'connected' is appeared in console
    this.messageService.connected.subscribe((res) => {
      console.log(res);
    })
  }

  toasterClickedHandler() {
    console.log("Toastr clicked");
  }
}
