import { Component, OnInit } from "@angular/core";

import { NotificationsService } from "@pf/services/notifications.service";

@Component({
  selector: "pf-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.css"],
})
export class NotificationsComponent implements OnInit {
  notifications = this.notificationsService.notifications;

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {}
}
