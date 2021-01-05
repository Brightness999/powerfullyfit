import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgGridModule } from "ag-grid-angular";

import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

import { TableComponent } from "./table/table.component";
import { ProgramFormComponent } from './program-form/program-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module,
    NgbModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TableComponent,
    ProgramFormComponent,
  ],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, TableComponent],
})
export class ComponentsModule {}
