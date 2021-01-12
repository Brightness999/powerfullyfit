import { Component, OnInit } from "@angular/core";

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

  constructor(
    private messageService: MessageService,
    private notificationsService: NotificationsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.messageService.messages.subscribe((res) => {
      console.log(res);

      this.chat.push(res);
    });
  }

  send(message) {
    this.messageService.sendMessage(message);

    this.message.reset();
  }
}
