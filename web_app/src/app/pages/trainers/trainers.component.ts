import { Component, OnInit } from "@angular/core";

import { CoachService } from "@pf/services/coach.service";

import { DateCellRendererComponent } from "@pf/components/date-cell-renderer/date-cell-renderer.component";
import { UserCellRendererComponent } from "@pf/components/user-cell-renderer/user-cell-renderer.component";

@Component({
  selector: "app-trainers",
  templateUrl: "./trainers.component.html",
  styleUrls: ["./trainers.component.scss"],
})
export class TrainersComponent implements OnInit {
  coaches: any = [];
  columnDefs = this.buildColumnDefs();

  constructor(private coachService: CoachService) {}

  ngOnInit(): void {
    this.coachService.findAllCoaches().subscribe((coaches) => {
      this.coaches = coaches;
    });
  }

  buildColumnDefs() {
    return [
      { field: "User", cellRendererFramework: UserCellRendererComponent },
      {
        headerName: "Joined On",
        field: "createTime",
        cellRendererFramework: DateCellRendererComponent,
      },
      // { field: "Clients" },
      // { headerName: "Program", field: "program.name" },
    ];
  }

  rowClicked(e) {
    console.log(e);

    // this.userModal.openModal();
  }
}
