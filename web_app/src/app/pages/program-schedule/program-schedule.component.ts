import { Component, OnInit, ViewChild } from "@angular/core";

import { FullCalendarComponent, CalendarOptions } from "@fullcalendar/angular";

@Component({
  selector: "pf-program-schedule",
  templateUrl: "./program-schedule.component.html",
  styleUrls: ["./program-schedule.component.css"],
})
export class ProgramScheduleComponent implements OnInit {
  @ViewChild("calendar") calendarComponent: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    aspectRatio: 16 / 8,
  };

  constructor() {}

  ngOnInit(): void {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }
}
