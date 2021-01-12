import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "pf-user-cell-renderer",
  templateUrl: "./user-cell-renderer.component.html",
  styleUrls: ["./user-cell-renderer.component.css"],
})
export class UserCellRendererComponent implements ICellRendererAngularComp {
  rowData: any;
  private params: any;

  constructor() {}

  agInit(params: any): void {
    console.log(params);

    this.params = params;
    this.rowData = params.data;
  }

  refresh(): boolean {
    return false;
  }
}
