import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/messages', title: 'Messages',  icon:'ni-planet text-blue', class: '' },
    { path: '/clients', title: 'Clients',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/trainers', title: 'Trainers',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/master-programs', title: 'Master Programs',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/master-workouts', title: 'Master Workouts',  icon:'ni-key-25 text-info', class: '' },
];
export const EXTRA_ROUTES: RouteInfo[] = [
    { path: '/settings', title: 'Settings',  icon: 'ni-spaceship', class: '' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: RouteInfo[];
  public extraMenuItems: RouteInfo[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.extraMenuItems = EXTRA_ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
