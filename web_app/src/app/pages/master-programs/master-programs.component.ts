import { Component, OnInit, ViewChild } from "@angular/core";

import { FullCalendarComponent, CalendarOptions } from "@fullcalendar/angular";

import { ProgramService } from "@pf/services/program.service";

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-master-programs",
  templateUrl: "./master-programs.component.html",
  styleUrls: ["./master-programs.component.scss"],
})
export class MasterProgramsComponent implements OnInit {
  @ViewChild("calendar") calendarComponent: FullCalendarComponent;

  loading: boolean = true;

  selectedProgram = null;
  programs: any = [];

  currentView = "user-list";

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    aspectRatio: 16 / 8,
    headerToolbar: false,
    firstDay: 1,
  };

  get programDuration() {
    if (this.selectedProgram)
      return this.selectedProgram.weeks * this.selectedProgram.phases;
    return 0;
  }

  constructor(
    private programService: ProgramService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.programService.getAllPrograms().subscribe((programs: any) => {
      console.log(programs);

      this.programs = programs;

      this.loading = false;

      this.activatedRoute.queryParams.subscribe((params) => {
        if (params.programid)
          this.programService
            .findProgramById(params.programid)
            .subscribe((program) => this.selectProgram(program));

        if (params.view) this.selectView(params.view);
      });
    });
  }

  selectProgram(program) {
    this.currentView = "user-list";

    this.selectedProgram = program;

    this.router.navigate(["master-programs"], {
      queryParams: { programid: program.id },
      // queryParamsHandling: "preserve",
      replaceUrl: true,
    });
  }

  viewSchedule() {
    this.selectView("schedule");
  }

  selectView(viewType: string) {
    this.currentView = viewType;

    this.router.navigate(["master-programs"], {
      queryParams: {
        programid: this.selectedProgram.id,
        view: this.currentView,
      },
      queryParamsHandling: "preserve",
      replaceUrl: true,
    });
  }
}
