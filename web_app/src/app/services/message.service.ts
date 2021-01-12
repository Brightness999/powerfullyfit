import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: "root",
})
export class MessageService extends Socket {
  messages = this.fromEvent<any>("createMessage");

  constructor() {
    super({ url: "http://localhost:4000/messages", options: {} });
  }

  sendMessage(text: string) {
    this.emit("createMessage", { text });
  }
}
