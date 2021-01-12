import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "fas fa-columns", class: "" },
  { path: "/messages", title: "Inbox", icon: "fas fa-inbox", class: "" },
  { path: "/clients", title: "Clients", icon: "ni ni-user-run", class: "" },
  {
    path: "/trainers",
    title: "Trainers",
    icon: "fas fa-chalkboard-teacher",
    class: "",
  },
  {
    path: "/master-programs",
    title: "Master Programs",
    icon: "fas fa-book",
    class: "",
  },
  {
    path: "/master-workouts",
    title: "Master Workouts",
    icon: "fas fa-dumbbell",
    class: "",
  },
];
export const EXTRA_ROUTES: RouteInfo[] = [
  {
    path: "/getting-started",
    title: "Getting Started",
    icon: "fas fa-paper-plane",
    class: "",
  },
  { path: "/invites", title: "Invites", icon: "fas fa-mail-bulk", class: "" },
  { path: "/settings", title: "Settings", icon: "fas fa-cog", class: "" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: RouteInfo[];
  public extraMenuItems: RouteInfo[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.extraMenuItems = EXTRA_ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
