import { Component, OnInit, Output, EventEmitter, NgZone } from "@angular/core";

import Swal from "sweetalert2";

import { WorkoutService } from "@pf/services/workout.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "pf-workout-form",
  templateUrl: "./workout-form.component.html",
  styleUrls: ["./workout-form.component.css"],
})
export class WorkoutFormComponent implements OnInit {
  @Output() submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  workoutForm: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
  });

  types = ["Upper Body", "Lower Body", "Full Body", "HIIT", "Core", "Recovery"];

  selectedType = "";

  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private workoutService: WorkoutService,
    private zone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {}

  selectType(selectedType: string) {
    console.log(selectedType);

    this.zone.run(() => {
      this.selectedType = selectedType;
    });
  }

  onSubmit(workout) {
    console.log(workout);
    this.isLoading = true;

    this.workoutService.createWorkout(workout).subscribe((newWorkout) => {
      console.log(newWorkout);

      this.isLoading = false;

      this.submitted.emit(true);

      Swal.fire({
        icon: "success",
        text: "Program Created!",
        focusConfirm: true,
        showCancelButton: true,
        cancelButtonText: "Close",
        confirmButtonText: "Start Building!",
      }).then((result) => {
        console.log("result");
        this.router.navigate(["/", "master-workouts", newWorkout.id]);
      });
    });
  }
}
