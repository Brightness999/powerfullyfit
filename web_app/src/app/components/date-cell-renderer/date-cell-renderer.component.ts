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

  private params: any;

  displayFields: Array<string> = [];

  constructor() {}

  agInit(params: any): void {
    console.log(params);

    this.params = params;
    this.rowData = params.data;

    this.displayFields = params.displayFields;
  }

  displayField(fieldName: string): string {
    const fieldNameParts = fieldName.split(".");
    let returnValue = { ...this.rowData };
    while (returnValue.hasOwnProperty(fieldNameParts[0])) {
      returnValue = returnValue[fieldNameParts[0]] || [];
      fieldNameParts.shift();
    }

    return returnValue.toString();
  }

  refresh(): boolean {
    return false;
  }
}
