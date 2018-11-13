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
import { AuthModule } from './modules/auth/auth.module';
import { MainPageComponent } from './components/main-page/main-page.component';


import { FormsPageModule } from './forms/forms-page.module';
import { AdminModule } from './modules/admin/admin.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainPageComponent
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
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
