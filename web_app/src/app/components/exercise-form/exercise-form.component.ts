import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import Swal from "sweetalert2";

import { ExerciseService } from "@pf/services/exercise.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "pf-exercise-form",
  templateUrl: "./exercise-form.component.html",
  styleUrls: ["./exercise-form.component.css"],
})
export class ExerciseFormComponent implements OnInit {
  @Output() submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  exerciseForm: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    type: [null, Validators.required],
    description: [null, Validators.required],
    logo: [null, Validators.required],
  });

  isLoading: boolean = false;

  blockSubmit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private exerciseService: ExerciseService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(exercise) {
    console.log(exercise);

    this.isLoading = true;

    this.exerciseService.createExercise(exercise).subscribe((exercise: any) => {
      console.log(exercise);

      this.isLoading = false;

      this.submitted.emit(true);

      Swal.fire({
        icon: "success",
        text: "Exercise Created!",
        focusConfirm: true,
        showCancelButton: true,
        cancelButtonText: "Close",
        confirmButtonText: "Start Building!",
      }).then((result) => {
        console.log("result");
      });
    });
  }

  addAsset(file) {
    console.log(file);
    this.exerciseForm.patchValue({ logo: file });
  }

  blockForm(blockSubmit) {
    console.log(blockSubmit);
  }
}
