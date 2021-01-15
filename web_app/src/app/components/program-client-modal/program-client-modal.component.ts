import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
  Output,
  EventEmitter,
} from "@angular/core";

import { ClientService } from "@pf/services/client.service";

import {
  BsModalService,
  BsModalRef,
  ModalDirective,
} from "ngx-bootstrap/modal";

@Component({
  selector: "pf-program-client-modal",
  templateUrl: "./program-client-modal.component.html",
  styleUrls: ["./program-client-modal.component.css"],
})
export class ProgramClientModalComponent implements OnInit {
  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;

  @Output() onUserSave: EventEmitter<any> = new EventEmitter<any>();

  modalRef: BsModalRef;

  users: any = [];
  selectedUsers: any = [];

  errorMessage = "";

  isLoading: boolean = false;

  constructor(
    private modalService: BsModalService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientService.findAllNotAssignedClient().subscribe((res) => {
      console.log(res);

      this.users = res;
    });
  }

  selectUser(user: any) {
    console.log(user);
    this.selectedUsers.push(user);
  }

  saveUser() {
    this.onUserSave.emit(this.selectedUsers);
  }

  openModal() {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }
}
