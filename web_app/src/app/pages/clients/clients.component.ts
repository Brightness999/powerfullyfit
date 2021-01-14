import { Component, OnInit, ViewChild } from "@angular/core";

import { CoachService } from "@pf/services/coach.service";

import { DateCellRendererComponent } from "@pf/components/date-cell-renderer/date-cell-renderer.component";
import { UserCellRendererComponent } from "@pf/components/user-cell-renderer/user-cell-renderer.component";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"],
})
export class ClientsComponent implements OnInit {
  @ViewChild("userModal") userModal: any;

  loading: boolean = true;
  clients: any = [];
  columnDefs = this.buildColumnDefs();

  constructor(private coachService: CoachService) {}

  ngOnInit(): void {
    this.coachService.findAllClients().subscribe((clients) => {
      this.clients = clients;

      this.loading = false;
    });
  }

  buildColumnDefs() {
    return [
      { field: "User", cellRendererFramework: UserCellRendererComponent },
      {
        headerName: "Joined On",
        field: "createTime",
        cellRendererFramework: DateCellRendererComponent,
      },
      { field: "Last Workout"  },
      { field: "Program" },
    ];
  }

  rowClicked(e) {
    console.log(e);

    this.userModal.openModal();
  }
}
