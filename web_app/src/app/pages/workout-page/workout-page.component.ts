import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";

import { WorkoutService } from "@pf/services/workout.service";

import { switchMap } from "rxjs/operators";

@Component({
  selector: "pf-workout-page",
  templateUrl: "./workout-page.component.html",
  styleUrls: ["./workout-page.component.css"],
})
export class WorkoutPageComponent implements OnInit {
  exercises = [];
  workout = null;

  columnDefs = this.buildColumnDefs();

  constructor(
    private workoutService: WorkoutService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.workoutService.findWorkoutById(params.id))
      )
      .subscribe((workout) => {
        this.workout = workout;
      });
  }

  buildColumnDefs() {
    return [{ field: "name" }];
  }

  rowClicked(workout) {
    this.router.navigate([workout.id], { relativeTo: this.activatedRoute });
  }
}
