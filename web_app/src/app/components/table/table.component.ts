import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";

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

  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  gridOptions: GridOptions;

  constructor() {}

  ngOnInit(): void {
    this.gridOptions = <GridOptions>{
      columnDefs: this.columnDefs,
      pagination: true,
      paginationAutoPageSize: true,
      suppressCellSelection: true,
      cacheQuickFilter: true,

      defaultColDef: {
        flex: 1,
        cellClass:
          "d-flex flex-row justify-content-start align-items-center flex-grow-0 my-1",
        wrapText: true,
        autoHeight: true,
        sortable: true,
        resizable: true,
      },

      context: {
        componentParent: this,
      },

      // EVENTS
      onGridSizeChanged: () => {
        this.gridOptions.api.sizeColumnsToFit();
        this.gridOptions.api.resetRowHeights();
      },
      onRowClicked: (event) => {
        this.rowClicked.emit(event.data);
      },
      onColumnResized: (event) => {
        this.gridOptions.api.resetRowHeights();
      },
      onGridReady: (event) => {
        this.gridOptions.api.resetRowHeights();
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
