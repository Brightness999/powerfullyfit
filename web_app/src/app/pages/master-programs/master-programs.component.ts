import { Component, OnInit } from "@angular/core";

import { ProgramService } from "@pf/services/program.service";

@Component({
  selector: "app-master-programs",
  templateUrl: "./master-programs.component.html",
  styleUrls: ["./master-programs.component.scss"],
})
export class MasterProgramsComponent implements OnInit {
  loading: boolean = true;

  selectedProgram = null;
  programs: any = [];

  get programDuration() {
    if (this.selectedProgram)
      return this.selectedProgram.weeks * this.selectedProgram.phases;
    return 0;
  }

  constructor(private programService: ProgramService) {}

  ngOnInit(): void {
    this.programService.getAllPrograms().subscribe((programs: any) => {
      console.log(programs);

      this.programs = programs;

      this.loading = false;
    });
  }

  selectProgram(program) {
    this.selectedProgram = program;
  }
}
