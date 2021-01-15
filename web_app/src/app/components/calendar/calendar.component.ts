import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";

import { FullCalendarComponent, CalendarOptions } from "@fullcalendar/angular";
import { EventApi, PluginDef } from "@fullcalendar/core";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

@Component({
  selector: "pf-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {
  @ViewChild("calendar") fullcalendar: FullCalendarComponent;

  @Output() dateClick: EventEmitter<any> = new EventEmitter<any>();

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    aspectRatio: 16 / 8,
    headerToolbar: false,
    firstDay: 1,
    plugins: [interactionPlugin],
    dateClick: (e) => this.dateClick.emit(),
  };

  constructor() {}

  ngOnInit(): void {}
}
