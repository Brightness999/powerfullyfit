import { Component, OnInit, TemplateRef } from "@angular/core";
import { OrganizationService } from "@pf/services/organization.service";
import { UserService } from "@pf/services/user.service";

import Swal from "sweetalert2";

import Chart from "chart.js";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "../../variables/charts";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public datasets: any;
  public data: any;
  public salesChart;

  user: any;
  notifications: any = [];

  personalBests: any = [];
  waitingForWorkouts: any = [];
  needSomeLovings: any = [];

  modalRef: BsModalRef;

  constructor(
    private organizationService: OrganizationService,
    private userService: UserService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    // this.datasets = [[0, 20, 10, 30, 15, 40, 20, 60, 60]];
    this.datasets = [[]];

    this.data = this.datasets[0];

    parseOptions(Chart, chartOptions());

    var chartClientCompliance = document.getElementById("client-compliance");

    var clientComplianceChart = new Chart(chartClientCompliance, {
      type: "line",
      options: chartExample2.options,
      data: this.data,
    });

    this.user = this.userService.currentUser;
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
