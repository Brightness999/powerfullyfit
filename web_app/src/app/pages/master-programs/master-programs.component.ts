import { Component, OnInit } from "@angular/core";

import { ProgramService } from "@pf/services/program.service";

@Component({
  selector: "app-master-programs",
  templateUrl: "./master-programs.component.html",
  styleUrls: ["./master-programs.component.scss"],
})
export class MasterProgramsComponent implements OnInit {
  loading: boolean = true;
  programs: any = [];

  constructor(private programService: ProgramService) {}

  ngOnInit(): void {
    this.programService.getAllPrograms().subscribe((programs: any) => {
      console.log(programs);

      this.programs = programs;

      this.loading = false;
    });
  }
}
