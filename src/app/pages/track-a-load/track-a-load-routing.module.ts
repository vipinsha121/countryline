import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackALoadComponent } from './track-a-load.component';


const routes: Routes = [
  {path: '', component: TrackALoadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackALoadRoutingModule { }
