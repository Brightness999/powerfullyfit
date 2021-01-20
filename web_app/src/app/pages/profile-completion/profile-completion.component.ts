import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";

import { InvitationService } from "@pf/services/invitation.service";

import { switchMap, tap } from "rxjs/operators";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "pf-profile-completion",
  templateUrl: "./profile-completion.component.html",
  styleUrls: ["./profile-completion.component.css"],
})
export class ProfileCompletionComponent implements OnInit {
  invitation: any;

  formError: boolean = false;

  profileForm: FormGroup = this.formBuilder.group({
    password: [null, Validators.required],
  });

  constructor(
    private invitationService: InvitationService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap((res) => console.log(res)),
        switchMap((params) =>
          this.invitationService.getCoachInvitationById(params.id)
        )
      )
      .subscribe((invitation) => {
        console.log(invitation);

        this.invitation = invitation;
      });
  }

  acceptInvitation(password) {
    console.log(this.invitation);

    this.invitationService
      .acceptInvitation(this.invitation.id)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(["login"], { replaceUrl: true });
      });
  }

  // login(loginForm: any) {
  //   console.log(loginForm);

  //   this.userService.login(loginForm).subscribe(
  //     (res) => {
  //       this.router.navigate(["dashboard"], { replaceUrl: true });
  //     },
  //     (err) => {
  //       this.formError = true;
  //     }
  //   );
  // }
}
