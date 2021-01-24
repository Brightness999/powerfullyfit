import { Injectable } from "@angular/core";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TermService {
  constructor(private backendProxy: BackendProxy) {}

  createTerm(term: any): Observable<any> {
    return this.backendProxy.post("term_condition", term);
  }
  
  updateTerm(id: number, term: any): Observable<any> {
    return this.backendProxy.patch(`term_condition/${id}`, term);
  }

  getTerm(): Observable<any> {
    return this.backendProxy.get("term_condition");
  }
}
