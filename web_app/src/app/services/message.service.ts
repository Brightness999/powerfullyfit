import { Injectable } from "@angular/core";

import { Socket } from "ngx-socket-io";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MessageService extends Socket {
  messages = this.fromEvent<any>("createMessage");

  constructor(private backendProxy: BackendProxy) {
    super({
      url: `http://localhost:4000/messages?token=${
        (localStorage.getItem("token"))
      }`,
      options: {},
    });
  }

  sendMessage(message: any) {
    console.log(message);

    return this.backendProxy.post("message", message);
    // this.emit("createMessage", text);
  }
}
