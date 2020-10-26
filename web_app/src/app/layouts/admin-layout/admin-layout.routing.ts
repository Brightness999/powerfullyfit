import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { ClientsComponent } from "../../pages/clients/clients.component";
import { MessagesComponent } from "../../pages/messages/messages.component";
import { TrainersComponent } from "../../pages/trainers/trainers.component";
import { MasterProgramsComponent } from "../../pages/master-programs/master-programs.component";
import { MasterWorkoutsComponent } from "../../pages/master-workouts/master-workouts.component";
import { SettingsComponent } from "../../pages/settings/settings.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "tables", component: TablesComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "messages", component: MessagesComponent },
  { path: "clients", component: ClientsComponent },
  { path: "trainers", component: TrainersComponent },
  { path: "master-programs", component: MasterProgramsComponent },
  { path: "master-workouts", component: MasterWorkoutsComponent },
  { path: "settings", component: SettingsComponent },
];
