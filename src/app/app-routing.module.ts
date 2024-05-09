import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddshowroomComponent } from './addshowroom/addshowroom.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { ShowshowroomComponent } from './showshowroom/showshowroom.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:"addshowroom",component:AddshowroomComponent},
  {path:"showroom",component:ShowroomComponent},
  {path:"showshowroom/:id",component:ShowshowroomComponent}  


];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
