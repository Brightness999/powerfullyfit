import { Injectable } from "@angular/core";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class InvitationService {
  constructor(private backendProxy: BackendProxy) {}

  inviteClient(invitation) {
    return this.backendProxy.post("invitation/client", invitation);
  }

  getAllInvitations() {
    return this.backendProxy.get("invitation");
  }
}
