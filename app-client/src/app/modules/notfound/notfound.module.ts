import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';

import { MaterialModule } from '../material/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [NotfoundComponent],
  exports: [
    NotfoundComponent
  ]
})
export class NotfoundModule { }
