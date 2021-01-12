import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: "root",
})
export class NotificationsService extends Socket {
  notifications = this.fromEvent<any>("createNotification");

  constructor() {
    super({ url: "http://localhost:4000/notifications", options: {} });
  }

  sendNotification(text: string) {
    this.emit("createNotification", { text });
  }
}
