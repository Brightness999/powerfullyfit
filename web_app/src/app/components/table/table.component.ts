import { Component, OnInit, Input, ViewChild } from "@angular/core";

import { GridOptions } from "ag-grid-community";
import { AgGridAngular } from "ag-grid-angular";

@Component({
  selector: "pf-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @ViewChild("agGrid") agGrid: AgGridAngular;

  @Input() columnDefs;

  @Input() rowData = [];
  @Input() height: string = "65vh";

  gridOptions: GridOptions;

  constructor() {}

  ngOnInit(): void {
    this.gridOptions = <GridOptions>{
      columnDefs: this.columnDefs,
      pagination: true,
      paginationAutoPageSize: true,
      suppressCellSelection: true,
      cacheQuickFilter: true,
      rowHeight: 50,

      context: {
        componentParent: this,
      },

      // EVENTS
      onGridSizeChanged: () => {
        this.gridOptions.api.sizeColumnsToFit();
        this.gridOptions.api.resetRowHeights();
      },
      onRowClicked: (event) => {
        console.log(event.data);
      },
      onColumnResized: (event) => {
        console.log("A column was resized");
      },
      onGridReady: (event) => {
        console.log("The grid is now ready");
        this.gridOptions.api.sizeColumnsToFit();
      },
    };
  }

  filter(search: string): void {
    if (!this.gridOptions.api) {
      return;
    }

    this.gridOptions.api.setQuickFilter(search);
  }
}
