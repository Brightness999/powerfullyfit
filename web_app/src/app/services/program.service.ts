import { Injectable } from "@angular/core";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProgramService {
  constructor(private backendProxy: BackendProxy) {}

  createProgram(program: any): Observable<any> {
    return this.backendProxy.post("program", program);
  }

  getAllPrograms(): Observable<any> {
    return this.backendProxy.get("program");
  }

  findProgramById(programId: string | number) {
    return this.backendProxy.get("program/" + programId.toString());
  }

  addUsersToProgram(programId: string | number, users: any) {
    return this.backendProxy.post(
      "program/" + programId.toString() + "/add-users",
      users
    );
  }
}
