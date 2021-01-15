import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgGridModule } from "ag-grid-angular";

import { NgSelectModule } from "@ng-select/ng-select";

import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

import { ModalModule } from "ngx-bootstrap/modal";

import { TreeModule } from "primeng/tree";

import { FullCalendarModule } from "@fullcalendar/angular"; // the main connector. must go first
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin

import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

import { TableComponent } from "./table/table.component";
import { ProgramFormComponent } from "./program-form/program-form.component";
import { WorkoutFormComponent } from "./workout-form/workout-form.component";
import { TrainerFormComponent } from "./trainer-form/trainer-form.component";
import { ClientFormComponent } from "./client-form/client-form.component";
import { InboxComponent } from "./inbox/inbox.component";
import { ExerciseFormComponent } from "./exercise-form/exercise-form.component";
import { DateCellRendererComponent } from "./date-cell-renderer/date-cell-renderer.component";
import { UserCellRendererComponent } from "./user-cell-renderer/user-cell-renderer.component";
import { FileUploaderComponent } from "./file-uploader/file-uploader.component";
import { DomSanitizerPipe } from "./pipes/dom-sanitizer.pipe";
import { UserModalComponent } from "./user-modal/user-modal.component";
import { ProgramClientModalComponent } from "./program-client-modal/program-client-modal.component";
import { WorkoutBuildderComponent } from "./workout-buildder/workout-buildder.component";
import { ProgramCalendarEventComponent } from "./program-calendar-event/program-calendar-event.component";
import { CalendarComponent } from "./calendar/calendar.component";

FullCalendarModule.registerPlugins([dayGridPlugin]);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([
      DateCellRendererComponent,
      UserCellRendererComponent,
    ]),
    ModalModule.forRoot(),
    FullCalendarModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TableComponent,
    ProgramFormComponent,
    WorkoutFormComponent,
    TrainerFormComponent,
    ClientFormComponent,
    InboxComponent,
    ExerciseFormComponent,
    DateCellRendererComponent,
    UserCellRendererComponent,
    FileUploaderComponent,
    DomSanitizerPipe,
    UserModalComponent,
    ProgramClientModalComponent,
    WorkoutBuildderComponent,
    ProgramCalendarEventComponent,
    CalendarComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TableComponent,
    InboxComponent,
    UserModalComponent,
    ProgramClientModalComponent,
    WorkoutBuildderComponent,
    ProgramCalendarEventComponent,
    CalendarComponent,
  ],
})
export class ComponentsModule {}
