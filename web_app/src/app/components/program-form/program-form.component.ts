import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import Swal from "sweetalert2";

import { ProgramService } from "@pf/services/program.service";

@Component({
  selector: "pf-program-form",
  templateUrl: "./program-form.component.html",
  styleUrls: ["./program-form.component.css"],
})
export class ProgramFormComponent implements OnInit {
  @Output() submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private programService: ProgramService) {}

  ngOnInit(): void {}

  submit(program) {


    this.programService
      .createProgram({ name: "program" })
      .subscribe((res) => {
        this.submitted.emit(true);

        Swal.fire("Program Created!", "Start Building", "success").then(
          function (result) {
            console.log(result);
          }
        );
      });
  }
}
