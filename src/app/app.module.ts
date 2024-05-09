import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddshowroomComponent } from './addshowroom/addshowroom.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { ShowshowroomComponent } from './showshowroom/showshowroom.component';


@NgModule({
  declarations: [
    AppComponent,
    AddshowroomComponent,
    ShowroomComponent,
    ShowshowroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
