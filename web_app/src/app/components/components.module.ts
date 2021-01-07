import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgGridModule } from "ag-grid-angular";

import { NgSelectModule } from "@ng-select/ng-select";

import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

import { TableComponent } from "./table/table.component";
import { ProgramFormComponent } from "./program-form/program-form.component";
import { WorkoutFormComponent } from './workout-form/workout-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TableComponent,
    ProgramFormComponent,
    WorkoutFormComponent,
  ],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, TableComponent],
})
export class ComponentsModule {}
