import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "pf-date-cell-renderer",
  templateUrl: "./date-cell-renderer.component.html",
  styleUrls: ["./date-cell-renderer.component.css"],
})
export class DateCellRendererComponent implements ICellRendererAngularComp {
  rowData: any;
  buttonTitle: string;
  action: any;
  buttonType: string;
  icon: string;
  private params: any;
  private url: any;
  private baseUrl: ActivatedRoute;

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
