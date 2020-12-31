import { Component, OnInit, ViewChild } from "@angular/core";

import { GridOptions } from "ag-grid-community";
import { AgGridAngular } from "ag-grid-angular";

@Component({
  selector: "pf-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @ViewChild("agGrid") agGrid: AgGridAngular;

  title = "Card Tables";

  columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];

  rowData = [
    { id: 0, make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
  ];

  gridOptions: GridOptions;

  constructor() {
    this.gridOptions = <GridOptions>{
      // PROPERTIES
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      pagination: true,
      paginationAutoPageSize: true,
      suppressCellSelection: true,
      cacheQuickFilter: true,
      domLayout: "autoHeight",
      // rowSelection: "single",

      context: {
        componentParent: this,
      },

      // EVENTS
      onGridSizeChanged: () => {
        this.gridOptions.api.sizeColumnsToFit();
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

  ngOnInit(): void {}

  filter(search: string): void {
    if (!this.gridOptions.api) {
      return;
    }

    this.gridOptions.api.setQuickFilter(search);
  }
}
