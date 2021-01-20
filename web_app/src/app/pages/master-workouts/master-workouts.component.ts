import { Component, OnInit, OnChanges } from "@angular/core";

import { WorkoutService } from "@pf/services/workout.service";

import { Router, ActivatedRoute } from "@angular/router";

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

  constructor(
    private workoutService: WorkoutService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.workoutService.getAllWorkouts().subscribe((workouts: any) => {
      this.workouts = workouts;

      this.loading = false;
    });
  }

  buildColumnDefs() {
    return [
      {
        field: "name",
        cellRenderer: (params) => {
          return '<div class="h2">' + params.value + "</div>";
        },
      },
      {
        field: "type",
        cellRenderer: (params) => {
          return (
            '<div class="text-white rounded bg-secondary px-3 py-1">' +
            params.value +
            "</div>"
          );
        },
      },
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

  rowClicked(workout) {
    this.router.navigate([workout.id], { relativeTo: this.activatedRoute });
  }
}
