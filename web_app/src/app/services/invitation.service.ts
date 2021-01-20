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

  inviteCoach(invitation) {
    return this.backendProxy.post("invitation/coach", invitation);
  }

  getAllInvitations() {
    return this.backendProxy.get("invitation");
  }

  getInvitationById(invitationId: string | number) {
    return this.backendProxy.get("invitation");
  }

  getCoachInvitationById(invitationId: string | number) {
    console.log(invitationId);

    return this.backendProxy.get(
      "invitation/coach-invitation/" + invitationId.toString()
    );
  }

  getClientInvitationById(invitationId: string | number) {
    return this.backendProxy.get(
      "invitation/client-invitation/" + invitationId.toString()
    );
  }

  acceptClientInvitation(
    invitationId: string | number,
    payload: { password: string }
  ) {
    return this.backendProxy.post(
      "invitation/client/" + invitationId.toString() + "/accept",
      payload
    );
  }

  acceptCoachInvitation(
    invitationId: string | number,
    payload: { password: string }
  ) {
    return this.backendProxy.post(
      "invitation/coach/" + invitationId.toString() + "/accept",
      payload
    );
  }
}
