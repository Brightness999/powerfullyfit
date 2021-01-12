import { Component, OnInit, Output, EventEmitter, NgZone } from "@angular/core";

import Swal from "sweetalert2";

import { WorkoutService } from "@pf/services/workout.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "pf-client-form",
  templateUrl: "./client-form.component.html",
  styleUrls: ["./client-form.component.css"],
})
export class ClientFormComponent implements OnInit {
  @Output() submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  clientForm: FormGroup = this.formBuilder.group({
    email: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
  });

  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private workoutService: WorkoutService,
    private zone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(client: string) {
    console.log(client);
    this.isLoading = true;

    // this.workoutService.createWorkout(email).subscribe((res) => {

    this.isLoading = false;

    this.submitted.emit(true);

    Swal.fire({
      icon: "success",
      text: "Client Invited!",
    }).then((result) => {
      console.log("result");
    });
    // });
  }
}
