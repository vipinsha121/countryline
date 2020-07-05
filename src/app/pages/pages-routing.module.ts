import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
       {
        path: "home",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
      {
        path: "trackaload",
        loadChildren: () => import("./track-a-load/track-a-load.module").then(m => m.TrackALoadModule)
      },
      {
        path:"contactus",
        loadChildren: () => import("./contactus/contactus.module").then(m => m.ContactusModule)
      }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
