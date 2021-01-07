import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import Swal from "sweetalert2";

import { ProgramService } from "@pf/services/program.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "pf-program-form",
  templateUrl: "./program-form.component.html",
  styleUrls: ["./program-form.component.css"],
})
export class ProgramFormComponent implements OnInit {
  @Output() submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  programForm: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    weeks: [null, Validators.required],
    phases: [null, Validators.required],
  });

  get programLength() {
    return (
      this.programForm.get("phases").value * this.programForm.get("weeks").value
    );
  }

  constructor(
    private formBuilder: FormBuilder,
    private programService: ProgramService
  ) {}

  ngOnInit(): void {}

  onSubmit(program) {
    console.log(program);

    this.programService.createProgram(program).subscribe((res) => {
      this.submitted.emit(true);

      Swal.fire("Program Created!", "Start Building", "success").then(function (
        result
      ) {
        console.log(result);
      });
    });
  }
}
