import { Injectable } from "@angular/core";

import { Socket } from "ngx-socket-io";

// import { BackendProxy } from "./backend.proxy";
import { socketEnvironment } from "../../environments/environment";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MessageService extends Socket {
  messages = this.fromEvent<any>("createMessage");
  get_messages = this.fromEvent<any>("getMessagesBetweenSelectedClientAndUser");
  connected = this.fromEvent<any>("connected");

  constructor() {
    super({
      url: `${socketEnvironment}?token=${localStorage.getItem("token")}`,
      options: {},
    });

    console.log("connecting ...");
  }

  sendMessage(message: any) {
    console.log(JSON.stringify(message));
    this.emit("createMessage", message);
  }

  getMessages(to: number) {
    this.emit("getMessagesBetweenSelectedClientAndUser", to);
  }
}
