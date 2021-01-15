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

  user: any = {};

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openModal(user) {
    this.user = user;

    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }
}
