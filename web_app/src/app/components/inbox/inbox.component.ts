import { Component, OnInit } from "@angular/core";

import { UserService } from "@pf/services/user.service";
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
  user: any;
  message: FormGroup = this.formBuilder.group({
    text: [null, Validators.required],
  });

  chat = [];

  // selectedUser = {
  //   id: 1,
  //   firstname: "Admin",
  //   lastname: "Fit",
  //   password: "12345",
  //   email: "admin@fit.com",
  //   createTime: "2021-01-03T11:44:24.115Z",
  //   role: "SUPER ADMIN",
  // };
  selectedUser: any;

  clients: any = [];

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private coachService: CoachService,
    private notificationsService: NotificationsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.user = this.userService.currentUser;
    this.coachService.findAllClients().subscribe((res) => {
      console.log(res);

      this.clients = res;
    });
    this.messageService.messages.subscribe((res) => {
      let result = JSON.parse(res);
      if(result.from.id === this.user.id || result.to.id === this.user.id) {
        this.chat.push(result);
        this.message.reset();
      }
    });
    this.messageService.get_messages.subscribe((res) => {
      this.chat = JSON.parse(res);
    });
  }

  send(message) {
    message["to"] = this.selectedUser;

    this.messageService.sendMessage(message);
  }

  onSelectedClientClick(selectedUser) {
    this.selectedUser = selectedUser;
    this.messageService.getMessages(this.selectedUser.id);
  }
}
