import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '../material/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InterviewersModule } from './modules/interviewers/interviewers.module';

import { AdminComponent } from './admin.component';
import { InterviewersComponent } from './modules/interviewers/interviewers.component';



const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, children: [
  { path: 'interviewers', component: InterviewersComponent }
]}];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(adminRoutes),
    FormsModule,
    InterviewersModule,
    FlexLayoutModule
  ],
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }