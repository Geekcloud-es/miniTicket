import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TicketsModule } from './modulos/tickets/tickets.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    TicketsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
