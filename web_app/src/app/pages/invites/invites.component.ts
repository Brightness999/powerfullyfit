import { Component, OnInit } from "@angular/core";

import { InvitationService } from "@pf/services/invitation.service";

import { DateCellRendererComponent } from "@pf/components/date-cell-renderer/date-cell-renderer.component";

@Component({
  selector: "pf-invites",
  templateUrl: "./invites.component.html",
  styleUrls: ["./invites.component.css"],
})
export class InvitesComponent implements OnInit {
  loading: boolean = true;
  invites: any = [];
  columnDefs = this.buildColumnDefs();

  constructor(private invitationService: InvitationService) {}

  ngOnInit(): void {
    this.invitationService.getAllInvitations().subscribe((res) => {
      this.invites = res;
    });
  }

  buildColumnDefs() {
    return [
      { field: "email" },
      { field: "firstname" },
      { field: "lastname" },
      {
        headerName: "Sent On",
        field: "createTime",
        cellRendererFramework: DateCellRendererComponent,
      },
    ];
  }
}
