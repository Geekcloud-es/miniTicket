import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { LoadComponent } from './load/load.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { TicketsRoutingModule } from './tickets-routing.module';



@NgModule({
  declarations: [ViewComponent, LoadComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule {

 }
