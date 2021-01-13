import { Component, OnInit, OnChanges } from "@angular/core";

import { WorkoutService } from "@pf/services/workout.service";

import { UserCellRendererComponent } from "@pf/components/user-cell-renderer/user-cell-renderer.component";
import { DateCellRendererComponent } from "@pf/components/date-cell-renderer/date-cell-renderer.component";

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
      { field: "name" },
      {
        field: "Created By",
        cellRendererFramework: UserCellRendererComponent,
        cellRendererParams: { displayFields: ["coach"] },
      },
      {
        headerName: "Created On",
        field: "createTime",
        cellRendererFramework: DateCellRendererComponent,
      },
    ];
  }
}
