import {
  Component,
  OnInit,
  ViewChild,
  Input,
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

  @Input() initialDate: Date;

  @Output() dateClick: EventEmitter<any> = new EventEmitter<any>();

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    aspectRatio: 16 / 8,
    headerToolbar: false,
    firstDay: 1,
    initialDate: "2020-06-01",
    plugins: [interactionPlugin],
    dateClick: (e) => {
      // console.log(e.date.getDate());
      this.dateClick.emit(e.date);
    },
  };

  constructor() {}

  ngOnInit(): void {
    // this.fullcalendar.api.
  }
}
