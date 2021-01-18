import { Injectable } from "@angular/core";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class WorkoutService {
  constructor(private backendProxy: BackendProxy) {}

  createWorkout(workout: any): Observable<any> {
    return this.backendProxy.post("workout", workout);
  }

  getAllWorkouts(): Observable<any> {
    return this.backendProxy.get("workout");
  }

  findWorkoutById(workoutId: string | number): Observable<any> {
    return this.backendProxy.get("workout/" + workoutId);
  }

  updateWorkoutById(workout: any) {
    return this.backendProxy.patch("workout/" + workout.id.toString(), workout);
  }
}
