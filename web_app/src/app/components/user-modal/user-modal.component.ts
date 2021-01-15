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
  selector: "pf-user-modal",
  templateUrl: "./user-modal.component.html",
  styleUrls: ["./user-modal.component.css"],
})
export class UserModalComponent implements OnInit {
  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;

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
