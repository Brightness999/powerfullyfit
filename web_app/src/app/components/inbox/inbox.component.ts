import { Component, OnInit } from "@angular/core";

import { CoachService } from "@pf/services/coach.service";
import { MessageService } from "@pf/services/message.service";
import { NotificationsService } from "@pf/services/notifications.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "pf-inbox",
  templateUrl: "./inbox.component.html",
  styleUrls: ["./inbox.component.scss"],
})
export class InboxComponent implements OnInit {
  message: FormGroup = this.formBuilder.group({
    text: [null, Validators.required],
  });

  chat = [];

  selectedUser = {
    id: 1,
    firstname: "Admin",
    lastname: "Fit",
    password: "12345",
    email: "admin@fit.com",
    createTime: "2021-01-03T11:44:24.115Z",
    role: "SUPER ADMIN",
  };

  clients: any = [];

  constructor(
    private messageService: MessageService,
    private coachService: CoachService,
    private notificationsService: NotificationsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.coachService.findAllClients().subscribe((res) => {
      console.log(res);

      this.clients = res;
    });
  }

  send(message) {
    message["to"] = this.selectedUser;

    this.messageService.sendMessage(message).subscribe((res) => {
      this.message.reset();
    });
  }
}
