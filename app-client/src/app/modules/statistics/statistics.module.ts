import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsService } from './statistics/statistics.service';
import { MaterialModule } from '../material/material';
import { IntreviewsListComponent } from './statistics/components/list/interviews-list.component';
import { ItemComponent } from './statistics/components/item/item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    StatisticsService
  ],
  declarations: [StatisticsComponent, IntreviewsListComponent, ItemComponent],
  exports: [
    StatisticsComponent
  ]
})
export class StatisticsModule {

}
