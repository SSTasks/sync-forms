import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../modules/material/material';

import { InterviewersComponent } from './interviewers.component';
import { ListComponent } from './components/list/list.component';
import { ListControls } from './components/listcontrols/listcontrols.component';
import { UsersDialogComponent } from './components/dialog/users.dialog';
import { GroupDialogComponent } from './components/dialog/group.dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    InterviewersComponent,
    ListControls,
    UsersDialogComponent,
    GroupDialogComponent,
    ListComponent
  ],
  exports: [
    InterviewersComponent
  ],
  entryComponents: [
    UsersDialogComponent,
    GroupDialogComponent
  ]
})

export class InterviewersModule { }
