import { Component, OnInit } from "@angular/core";
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

    var chartSignins = document.getElementById("client-sign-ins");

    var signinsChart = new Chart(chartSignins, {
      type: "line",
      options: chartExample2.options,
      data: chartExample2.data,
    });

    var chartWorkouts = document.getElementById("workouts");

    var workoutsChart = new Chart(chartWorkouts, {
      type: "line",
      options: chartExample2.options,
      data: chartExample2.data,
    });

    var chartNutritionCompliance = document.getElementById(
      "nutrition-compliance"
    );

    var NutritionComplianceChart = new Chart(chartNutritionCompliance, {
      type: "line",
      options: chartExample2.options,
      data: chartExample2.data,
    });

    // var chartSales = document.getElementById("chart-sales");

    // this.salesChart = new Chart(chartSales, {
    //   type: "line",
    //   options: chartExample1.options,
    //   data: chartExample1.data,
    // });
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
}
