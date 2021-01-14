import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  TemplateRef,
} from "@angular/core";

import { FullCalendarComponent, CalendarOptions } from "@fullcalendar/angular";

import { ProgramService } from "@pf/services/program.service";

import { DateCellRendererComponent } from "@pf/components/date-cell-renderer/date-cell-renderer.component";
import { UserCellRendererComponent } from "@pf/components/user-cell-renderer/user-cell-renderer.component";

import { Router, ActivatedRoute } from "@angular/router";

import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

@Component({
  selector: "app-master-programs",
  templateUrl: "./master-programs.component.html",
  styleUrls: ["./master-programs.component.scss"],
})
export class MasterProgramsComponent implements OnInit, AfterViewInit {
  @ViewChild("calendar") calendarComponent: FullCalendarComponent;
  @ViewChild("userModal") userModal: any;

  loading: boolean = true;

  selectedProgram = null;
  programs: any = [];

  currentView = "user-list";

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    aspectRatio: 16 / 8,
    headerToolbar: false,
    firstDay: 1,
    plugins: [interactionPlugin],
  };

  users = [
    {
      id: 5,
      firstname: "other",
      lastname: "lasr",
      password: "",
      email: "other@emil.com",
      createTime: "2021-01-14T07:56:46.278Z",
      coach: null,
      assignedPrograms: [],
      logo: null,
    },
  ];

  columnDefs = this.buildColumnDefs();

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

  ngAfterViewInit(): void {}

  selectProgram(program) {
    this.currentView = "user-list";

    this.selectedProgram = program;

    this.router.navigate(["master-programs"], {
      queryParams: { programid: program.id },
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

  dateClick(e) {
    console.log(e);
  }

  buildColumnDefs() {
    return [
      { headerName: "User", cellRendererFramework: UserCellRendererComponent },
      {
        headerName: "Joined On",
        field: "createTime",
        cellRendererFramework: DateCellRendererComponent,
      },
    ];
  }

  rowClicked(e) {
    console.log(e);

    this.userModal.openModal();
  }
}
