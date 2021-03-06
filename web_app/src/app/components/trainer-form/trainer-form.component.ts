import { Component, OnInit, Output, EventEmitter, NgZone } from "@angular/core";

import Swal from "sweetalert2";

import { InvitationService } from "@pf/services/invitation.service";
import { UserService } from "@pf/services/user.service";

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
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
  });

  errorMessage: string = "";

  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private invitationService: InvitationService,
    private zone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(trainer) {
    trainer["organization"] = this.userService.currentUser.organization;

    this.isLoading = true;

    this.invitationService.inviteCoach(trainer).subscribe(
      (trainer) => {
        this.isLoading = false;

        this.submitted.emit(true);

        Swal.fire({
          icon: "success",
          text: "Trainer Invited!",
        }).then((result) => {
          console.log("result");
        });
      },
      (err) => {
        console.log(err.error.message[0]);

        this.isLoading = false;

        setTimeout(() => {
          this.errorMessage = "";
        }, 10000);

        this.errorMessage = err.error.message[0];
      }
    );
  }
}
