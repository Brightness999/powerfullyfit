import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "pf-video-cell-renderer",
  templateUrl: "./video-cell-renderer.component.html",
  styleUrls: ["./video-cell-renderer.component.css"],
})
export class VideoCellRendererComponent implements ICellRendererAngularComp {
  rowData: any;
  rowValue: any;
  private params: any;

  displayFields: Array<string> = [];

  constructor() {}

  agInit(params: any): void {
    this.params = params;
    this.rowData = params.data;
    this.rowValue = params.value;

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
