import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "pf-getting-started",
  templateUrl: "./getting-started.component.html",
  styleUrls: ["./getting-started.component.css"],
})
export class GettingStartedComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(["/", "dashboard"], {
      queryParams: { product_tour_id: "198531" },
    });
  }
}
