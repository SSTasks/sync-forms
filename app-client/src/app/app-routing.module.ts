import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PreviewPageComponent } from './forms/preview-page/preview-page.component';
import { ConstructorPageComponent } from './forms/constructor-page/constructor-page.component';
import { InterviewPageComponent } from './forms/interview-page/interview-page.component';
import { AdminComponent } from './modules/admin/admin.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { StatisticsComponent } from './modules/statistics/statistics/statistics.component';

const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MainPageComponent},
    {path: 'preview', component: PreviewPageComponent},
    {path: 'constructor', component: ConstructorPageComponent},
    {path: 'interview-page', component: InterviewPageComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'statistics', component: StatisticsComponent},
    {path: '**',  component: NotfoundComponent}
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}
