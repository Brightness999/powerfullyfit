import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import Swal from "sweetalert2";

import { ProgramService } from "@pf/services/program.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

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

  isLoading: boolean = false;

  get programLength() {
    return (
      this.programForm.get("phases").value * this.programForm.get("weeks").value
    );
  }

  constructor(
    private formBuilder: FormBuilder,
    private programService: ProgramService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(program) {
    console.log(program);
    this.isLoading = true;

    this.programService.createProgram(program).subscribe((program) => {
      console.log(program);

      this.isLoading = false;

      this.submitted.emit(true);

      Swal.fire({
        icon: "success",
        text: "Program Created!",
        focusConfirm: true,
        showCancelButton: true,
        cancelButtonText: "Close",
        confirmButtonText: "Start Building!",
      }).then((result) => {
        console.log("result");
        this.router.navigate(["/", "master-programs", program.id, "schedule"]);
      });
    });
  }
}
