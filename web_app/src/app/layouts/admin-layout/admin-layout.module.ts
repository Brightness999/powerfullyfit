import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ClipboardModule } from "ngx-clipboard";

import { ComponentsModule } from "@pf/components/components.module";

import { TreeModule } from "primeng/tree";

import { FullCalendarModule } from "@fullcalendar/angular"; // the main connector. must go first
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

import { MessagesComponent } from "../../pages/messages/messages.component";
import { ClientsComponent } from "../../pages/clients/clients.component";
import { TrainersComponent } from "../../pages/trainers/trainers.component";
import { MasterProgramsComponent } from "../../pages/master-programs/master-programs.component";
import { MasterWorkoutsComponent } from "../../pages/master-workouts/master-workouts.component";
import { SettingsComponent } from "../../pages/settings/settings.component";
import { WorkoutPageComponent } from "../../pages/workout-page/workout-page.component";
import { InvitesComponent } from "../../pages/invites/invites.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { ProgramScheduleComponent } from "../../pages/program-schedule/program-schedule.component";
import { GettingStartedComponent } from "../../pages/getting-started/getting-started.component";
// import { ProfileCompletionComponent } from "../../pages/profile-completion/profile-completion.component";

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  // interactionPlugin,
]);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    SweetAlert2Module,
    FullCalendarModule,
    ComponentsModule,
    TreeModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MessagesComponent,
    ClientsComponent,
    TrainersComponent,
    MasterProgramsComponent,
    MasterWorkoutsComponent,
    SettingsComponent,
    InvitesComponent,
    NotificationsComponent,
    ProgramScheduleComponent,
    WorkoutPageComponent,
    GettingStartedComponent,
    // ProfileCompletionComponent,
  ],
})
export class AdminLayoutModule {}
