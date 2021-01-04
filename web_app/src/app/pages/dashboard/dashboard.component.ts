import { Component, OnInit } from "@angular/core";
import { OrganizationService } from "@pf/services/organization.service";
import { UserService } from "@pf/services/user.service";

import Chart from "chart.js";

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
  public clicked: boolean = true;
  public clicked1: boolean = false;

  user;

  constructor(
    private organizationService: OrganizationService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40],
    ];
    this.data = this.datasets[0];

    parseOptions(Chart, chartOptions());

    var chartClientCompliance = document.getElementById("client-compliance");

    var clientComplianceChart = new Chart(chartClientCompliance, {
      type: "line",
      options: chartExample2.options,
      data: chartExample2.data,
    });

    this.organizationService.findOrganizationById(1).subscribe((res) => {
      console.log(res);
    });

    console.log(this.userService.currentUser);

    this.user = this.userService.currentUser;
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
}
