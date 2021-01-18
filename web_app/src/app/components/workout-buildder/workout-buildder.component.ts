import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
} from "@angular/core";

import {
  BsModalService,
  BsModalRef,
  ModalDirective,
} from "ngx-bootstrap/modal";

import { Router, ActivatedRoute } from "@angular/router";

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

import { UserCellRendererComponent } from "@pf/components/user-cell-renderer/user-cell-renderer.component";
import { DateCellRendererComponent } from "@pf/components/date-cell-renderer/date-cell-renderer.component";

import { WorkoutService } from "@pf/services/workout.service";
import { ExerciseService } from "@pf/services/exercise.service";

@Component({
  selector: "pf-workout-buildder",
  templateUrl: "./workout-buildder.component.html",
  styleUrls: ["./workout-buildder.component.css"],
})
export class WorkoutBuildderComponent implements OnInit {
  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;

  isLoading: boolean = false;

  errorMessage = "";

  modalRef: BsModalRef;

  workout: any = {};

  organizationExercises = [];

  columnDefs = this.buildColumnDefs();

  constructor(
    private workoutService: WorkoutService,
    private exerciseService: ExerciseService,
    private modalService: BsModalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.exerciseService.findAllExercises().subscribe((res: any) => {
      this.organizationExercises = res;
    });
  }

  openModal(workout) {
    this.workout = workout;

    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }

  buildColumnDefs() {
    return [
      { field: "exercise" },
      { field: "sets" },
      {
        field: "Target",
        cellRendererFramework: UserCellRendererComponent,
        cellRendererParams: { displayFields: ["coach"] },
      },
      {
        headerName: "Rest Period",
        field: "createTime",
        cellRendererFramework: DateCellRendererComponent,
      },
    ];
  }

  rowClicked(workout) {
    this.router.navigate([workout.id], { relativeTo: this.activatedRoute });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  save() {
    this.workoutService.updateWorkoutById(this.workout).subscribe((res) => {
      console.log(res);

      this.hide();
    });
  }
}
