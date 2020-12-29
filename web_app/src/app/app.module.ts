import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MessagesComponent } from './pages/messages/messages.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { MasterProgramsComponent } from './pages/master-programs/master-programs.component';
import { MasterWorkoutsComponent } from './pages/master-workouts/master-workouts.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    MessagesComponent,
    ClientsComponent,
    TrainersComponent,
    MasterProgramsComponent,
    MasterWorkoutsComponent,
    SettingsComponent,
    AppointmentsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
