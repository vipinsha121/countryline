import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';



const routes: Routes = [
  // {"path": "",
  // "component": LayoutComponent,
  // },
   {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  // // {
  // //   path: "",
  // //   loadChildren: () =>
  // //     import("./idealz/idealz.module").then(m => m.IdealzModule)
  // // },
   {
    path: "home",
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
  }
];

@NgModule({   
  imports: [RouterModule.forRoot(routes ,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
