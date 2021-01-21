import { Component, OnInit, ViewChild } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";

import { WorkoutService } from "@pf/services/workout.service";

import { switchMap } from "rxjs/operators";

import { VideoCellRendererComponent } from "@pf/components/video-cell-renderer/video-cell-renderer.component";

@Component({
  selector: "pf-workout-page",
  templateUrl: "./workout-page.component.html",
  styleUrls: ["./workout-page.component.css"],
})
export class WorkoutPageComponent implements OnInit {
  @ViewChild("workoutBuilder", { static: false }) workoutBuilder: any;
  workout = null;

  columnDefs = this.buildColumnDefs();

  get exercises() {
    if (this.workout) return this.workout.exercises;
    return [];
  }

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
        // workout["exercises"] = [];
        this.workout = workout;
        console.log(workout);
      });
  }

  edit() {
    console.log("edit");

    this.workoutBuilder.openModal(this.workout);
  }

  buildColumnDefs() {
    return [
      // { field: "logo.url" },
      {
        headerName: "Exercise",
        field: "exercise",
        cellRendererFramework: VideoCellRendererComponent,
        width: 100,
      },
      { field: "reps", width: 50 },
      { field: "sets", width: 50 },
      { field: "time", width: 50 },
    ];
  }
}
