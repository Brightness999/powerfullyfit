import { Component, OnInit, ElementRef } from "@angular/core";

import { OrganizationService } from "@pf/services/organization.service";
import { UserService } from "@pf/services/user.service";

import { ROUTES, EXTRA_ROUTES } from "../sidebar/sidebar.component";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";

import { Router } from "@angular/router";

import Swal from "sweetalert2";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];

  user: any;

  constructor(
    private organizationService: OrganizationService,
    private userService: UserService,
    public location: Location,
    private element: ElementRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.listTitles = ROUTES.concat(EXTRA_ROUTES);
    this.user = this.userService.currentUser;
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }

  addProgram() {
    Swal.fire({
      title: "Build a New Master Program",
      confirmButtonText: "Create Program",
      denyButtonText: "Cancel",
      showConfirmButton: true,
      showDenyButton: true,
      width: "55em",
      reverseButtons: true,
      position: "top",
      html:
        "Name and set the duration of your program. Clients can only see their current phase and will automatically get the next phase when the date elapses." +
        "Progress photos and weigh-ins will be automatically scheduled at the start of each training plan or phase.",
    }).then((result) => {
      console.log(result);
    });
  }

  addWorkout() {
    Swal.fire({
      title: "Build a New Master Program",
      confirmButtonText: "Create Program",
      denyButtonText: "Cancel",
      showConfirmButton: true,
      showDenyButton: true,
      width: "55em",
      reverseButtons: true,
      html:
        "Name and set the duration of your program. Clients can only see their current phase and will automatically get the next phase when the date elapses." +
        "Progress photos and weigh-ins will be automatically scheduled at the start of each training plan or phase.",
    }).then(function (result) {
      console.log(result);
    });
  }

  addTrainer() {
    Swal.fire({
      title: "Build a New Master Program",
      confirmButtonText: "Create Program",
      denyButtonText: "Cancel",
      showConfirmButton: true,
      showDenyButton: true,
      width: "55em",
      reverseButtons: true,
      html:
        "Name and set the duration of your program. Clients can only see their current phase and will automatically get the next phase when the date elapses." +
        "Progress photos and weigh-ins will be automatically scheduled at the start of each training plan or phase.",
    }).then(function (result) {
      console.log(result);
    });
  }

  addClient() {
    Swal.fire({
      title: "Build a New Master Program",
      confirmButtonText: "Create Program",
      denyButtonText: "Cancel",
      showConfirmButton: true,
      showDenyButton: true,
      width: "55em",
      reverseButtons: true,
      html:
        "Name and set the duration of your program. Clients can only see their current phase and will automatically get the next phase when the date elapses." +
        "Progress photos and weigh-ins will be automatically scheduled at the start of each training plan or phase.",
    }).then(function (result) {
      console.log(result);
    });
  }

  logout() {
    localStorage.removeItem("token");

    this.router.navigate(["login"]);
  }
}
