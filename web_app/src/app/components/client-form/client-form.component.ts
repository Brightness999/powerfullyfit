import { Component, OnInit, Output, EventEmitter, NgZone } from "@angular/core";

import Swal from "sweetalert2";

import { CoachService } from "@pf/services/coach.service";
import { InvitationService } from "@pf/services/invitation.service";

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
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
    coach: [null, Validators.required],
  });

  errorMessage: string = "";

  isLoading: boolean = false;

  availableCoaches: any = [];

  selectedCoachId = 0;

  constructor(
    private formBuilder: FormBuilder,
    private coachService: CoachService,
    private invitationService: InvitationService,
    private zone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.coachService.findAllCoaches().subscribe((availableCoaches) => {
      console.log(availableCoaches);

      this.availableCoaches = availableCoaches;
    });
  }

  onSubmit(client) {
    console.log(client);
    this.isLoading = true;

    this.invitationService.inviteClient(client).subscribe(
      (res) => {
        this.isLoading = false;

        this.submitted.emit(true);

        Swal.fire({
          icon: "success",
          text: "Client Invited!",
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
