import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackALoadRoutingModule } from './track-a-load-routing.module';
import { TrackALoadComponent } from './track-a-load.component';


@NgModule({
  declarations: [TrackALoadComponent],
  imports: [
    CommonModule,
    TrackALoadRoutingModule
  ]
})
export class TrackALoadModule { }
