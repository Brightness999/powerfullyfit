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

  displayFields: Array<string> = [];

  constructor() {}

  agInit(params: any): void {
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

    return returnValue;
  }

  refresh(): boolean {
    return false;
  }
}
