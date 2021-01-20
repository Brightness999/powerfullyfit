import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { BackendProxy } from "./services/backend.proxy";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { ProfileCompletionComponent } from "./pages/profile-completion/profile-completion.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { ModalModule } from "ngx-bootstrap/modal";

import { NgSelectModule } from "@ng-select/ng-select";

import { FullCalendarModule } from "@fullcalendar/angular"; // the main connector. must go first
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin
import interactionPlugin from "@fullcalendar/interaction"; // a plugin

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

import { ToastrModule } from "ngx-toastr";

import { OrganizationService } from "./services/organization.service";
import { UserService } from "./services/user.service";
import { CoachService } from "./services/coach.service";
import { ClientService } from "./services/client.service";
import { ProgramService } from "./services/program.service";
import { WorkoutService } from "./services/workout.service";
import { MessageService } from "./services/message.service";
import { NotificationsService } from "./services/notifications.service";
import { ExerciseService } from "./services/exercise.service";
import { ExternalAssetService } from "./services/external-asset.service";
import { InvitationService } from "./services/invitation.service";

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    SweetAlert2Module.forRoot(),
    NgSelectModule,
    FullCalendarModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ProfileCompletionComponent,
  ],
  providers: [
    BackendProxy,
    OrganizationService,
    UserService,
    CoachService,
    ClientService,
    ProgramService,
    WorkoutService,
    MessageService,
    NotificationsService,
    ExerciseService,
    ExternalAssetService,
    InvitationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
