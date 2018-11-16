import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '../material/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminComponent } from './admin.component';
import { InterviewersComponent } from './components/interviewers/interviewers.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ListComponent } from './components/list/list.component';
import { ListControls } from './components/listcontrols/listcontrols.component';
import { UsersDialogComponent } from './components/dialog/users.dialog';
import { GroupDialogComponent } from './components/dialog/group.dialog';


const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, children: [
    { path: 'interviewers', component: InterviewersComponent },
    { path: 'groups', component: GroupsComponent }
    ]
  }];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(adminRoutes),
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [
    AdminComponent,
    ListComponent,
    ListControls,
    UsersDialogComponent,
    GroupDialogComponent,
    GroupsComponent,
    InterviewersComponent
  ],
  exports: [
    AdminComponent
  ],
  entryComponents: [
    UsersDialogComponent,
    GroupDialogComponent
  ]
})
export class AdminModule { }