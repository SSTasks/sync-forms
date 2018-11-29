import '../polyfills';

import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { AuthModule } from './modules/auth/auth.module';
import { FormsPageModule } from './forms/forms-page.module';
import { AdminModule } from './modules/admin/admin.module';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { NotfoundModule } from './modules/notfound/notfound.module';
import { SvgViewer } from '../app/components/main-page/svg-viewer.component';

import { Store } from './store';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainPageComponent,
        SvgViewer
    ],
    imports: [
        AuthModule,
        AdminModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsPageModule,
        FormsModule,
        ReactiveFormsModule,
        StatisticsModule,
        NotfoundModule
    ],
    providers: [
        Store
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
