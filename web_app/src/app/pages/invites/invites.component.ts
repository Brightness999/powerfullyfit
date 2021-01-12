import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pf-invites",
  templateUrl: "./invites.component.html",
  styleUrls: ["./invites.component.css"],
})
export class InvitesComponent implements OnInit {
  loading: boolean = true;
  invites: any = [];
  columnDefs = this.buildColumnDefs();

  constructor() {}

  ngOnInit(): void {}

  buildColumnDefs() {
    return [
      { field: "firstname" },
      { field: "Created By" },
      { field: "Create Date" },
    ];
  }
}
