import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AuthenticatedUserGuard } from "./guards/authenticated-user.guard";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { ProfileCompletionComponent } from "./pages/profile-completion/profile-completion.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthenticatedUserGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
      },
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/auth-layout/auth-layout.module#AuthLayoutModule",
      },
    ],
  },
  { path: "client-invitation/:id", component: ProfileCompletionComponent },
  { path: "coach-invitation/:id", component: ProfileCompletionComponent },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
