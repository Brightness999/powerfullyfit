import { Component, OnInit } from "@angular/core";

import { WorkoutService } from "@pf/services/workout.service";

@Component({
  selector: "app-master-workouts",
  templateUrl: "./master-workouts.component.html",
  styleUrls: ["./master-workouts.component.scss"],
})
export class MasterWorkoutsComponent implements OnInit {
  loading: boolean = true;
  workouts: any = [];
  columnDefs = this.buildColumnDefs();

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workoutService.getAllWorkouts().subscribe((workouts: any) => {
      console.log(workouts);

      this.workouts = workouts;

      this.loading = false;
    });
  }

  buildColumnDefs() {
    return [
      { field: "Name" },
      { field: "Created By" },
      { field: "Create Date" },
    ];
  }
}
