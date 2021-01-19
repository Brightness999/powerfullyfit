import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef,
} from "@angular/core";

import { ProgramService } from "@pf/services/program.service";

import { DateCellRendererComponent } from "@pf/components/date-cell-renderer/date-cell-renderer.component";
import { UserCellRendererComponent } from "@pf/components/user-cell-renderer/user-cell-renderer.component";

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-master-programs",
  templateUrl: "./master-programs.component.html",
  styleUrls: ["./master-programs.component.scss"],
})
export class MasterProgramsComponent implements OnInit {
  @ViewChild("userModal") userModal: any;
  @ViewChild("calendarEventModal") calendarEvent: any;
  @ViewChild("clientsModal") clientsModal: any;

  loading: boolean = true;

  selectedProgram = null;
  programs: any = [];

  currentView = "user-list";

  usersSelected: boolean = false;

  columnDefs = this.buildColumnDefs();

  get programDuration() {
    if (this.selectedProgram)
      return this.selectedProgram.weeks * this.selectedProgram.phases;
    return 0;
  }

  get clients() {
    if (this.selectedProgram) return this.selectedProgram.clients;
    return [];
  }

  get programPhases() {
    if (this.selectedProgram) return new Array(this.selectedProgram.phases);
    return [];
  }

  constructor(
    private programService: ProgramService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.programService.getAllPrograms().subscribe((programs: any) => {
      this.programs = programs;

      this.loading = false;

      this.activatedRoute.queryParams.subscribe((params) => {
        if (params.programid) this.selectProgram({ id: params.programid });

        if (params.view) this.selectView(params.view);
      });
    });
  }

  selectProgram(program) {
    this.currentView = "user-list";

    this.programService.findProgramById(program.id).subscribe((program) => {
      this.selectedProgram = program;
    });

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

  openClientsModal() {
    this.clientsModal.openModal();
  }

  onNodeSelect(e) {
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

    this.userModal.openModal(e);
  }

  dateClick(dateClicked) {
    this.calendarEvent.openModal(dateClicked.getDate());
  }

  onUserSave(users) {
    console.log(users);
    this.programService
      .addUsersToProgram(this.selectedProgram.id, users)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
