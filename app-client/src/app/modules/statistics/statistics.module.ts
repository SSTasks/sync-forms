import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsService } from './services/statistics.service';
import { MaterialModule } from '../material/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    StatisticsService
  ],
  declarations: [StatisticsComponent],
  exports: [
    StatisticsComponent
  ]
})
export class StatisticsModule {

}
