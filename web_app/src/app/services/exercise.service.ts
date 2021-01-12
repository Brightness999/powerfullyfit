import { Injectable } from "@angular/core";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ExerciseService {
  constructor(private backendProxy: BackendProxy) {}

  findAllExercises() {
    return this.backendProxy.get("exercise");
  }

  createExercise(exercise) {
    return this.backendProxy.post("exercise", exercise);
  }
}
