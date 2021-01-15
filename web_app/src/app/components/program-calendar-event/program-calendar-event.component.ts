import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
} from "@angular/core";

import { WorkoutService } from "@pf/services/workout.service";

import {
  BsModalService,
  BsModalRef,
  ModalDirective,
} from "ngx-bootstrap/modal";

@Component({
  selector: "pf-program-calendar-event",
  templateUrl: "./program-calendar-event.component.html",
  styleUrls: ["./program-calendar-event.component.css"],
})
export class ProgramCalendarEventComponent implements OnInit {
  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;

  errorMessage = "";

  isLoading = false;

  modalRef: BsModalRef;

  user: any = {};

  workouts = [];

  constructor(
    private workoutService: WorkoutService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.workoutService.getAllWorkouts().subscribe((workouts: any) => {
      console.log(workouts);

      this.workouts = workouts;
    });
  }

  openModal(user) {
    this.user = user;
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }
}
