import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ContactusModule } from './contactus/contactus.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    PagesRoutingModule,
    ContactusModule
  ]
})
export class PagesModule { }
