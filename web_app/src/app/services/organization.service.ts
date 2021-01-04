import { Injectable } from "@angular/core";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  constructor(
    private backendProxy: BackendProxy,
  ) {}

  findAllOrganizations() {
    return this.backendProxy.get(this.backendProxy.url + "organization");
  }

  findOrganizationById(organizationId: string | number) {
    return this.backendProxy.get(
      this.backendProxy.url + "organization/" + organizationId.toString()
    );
  }
}
