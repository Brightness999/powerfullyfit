import { Component, OnInit, Output, EventEmitter, NgZone } from "@angular/core";

import Swal from "sweetalert2";

import { WorkoutService } from "@pf/services/workout.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "pf-trainer-form",
  templateUrl: "./trainer-form.component.html",
  styleUrls: ["./trainer-form.component.css"],
})
export class TrainerFormComponent implements OnInit {
  @Output() submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  trainerForm: FormGroup = this.formBuilder.group({
    email: [null, Validators.required],
  });

  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private workoutService: WorkoutService,
    private zone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(trainer) {
    console.log(trainer);
    this.isLoading = true;

    // this.workoutService.createWorkout(workout).subscribe((newWorkout) => {
      // console.log(newWorkout);

      this.isLoading = false;

      this.submitted.emit(true);

      Swal.fire({
        icon: "success",
        text: "trainer Invited!",
      }).then((result) => {
        console.log("result");
      });
    // });
  }
}
