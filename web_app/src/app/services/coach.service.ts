import { Injectable } from "@angular/core";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CoachService {
  constructor(private backendProxy: BackendProxy) {}

  findAllClients() {
    return this.backendProxy.get("coach/clients");
  }

  findAllCoaches() {
    return this.backendProxy.get("coach");
  }

  findCoachClients(coachId: number | string) {
    // return this.backendProxy.get("coach/clients" + coachId.toString());
    return this.backendProxy.get("coach/" + coachId.toString() + "/clients");
  }
}
