import { Injectable } from "@angular/core";

import { Socket } from "ngx-socket-io";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class NotificationsService extends Socket {
  notifications = this.fromEvent<any>("createNotification");

  constructor(private backendProxy: BackendProxy) {
    super({ url: `${backendProxy.url}notifications`, options: {} });
  }

  sendNotification(text: string) {
    this.emit("createNotification", { text });
  }

  getAllNotifications() {
    return this.backendProxy.get("notification");
  }
}
