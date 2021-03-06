import { Injectable } from "@angular/core";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  constructor(private backendProxy: BackendProxy) {}

  findAllOrganizations(): Observable<any> {
    return this.backendProxy.get("organization");
  }

  findOrganizationById(organizationId: string | number): Observable<any> {
    return this.backendProxy.get("organization/" + organizationId.toString());
  }
}
