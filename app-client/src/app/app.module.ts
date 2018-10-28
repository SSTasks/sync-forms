import '../polyfills';

import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material';

import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from './modules/auth/auth.module';
import {FormsPageModule} from './forms/forms-page.module';
import {NavListComponent} from './forms/main-nav/nav-list/nav-list.component';
import {NavConstructorComponent} from './forms/main-nav/nav-constructor/nav-constructor.component';
import {MainNavComponent} from './forms/main-nav/main-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        AuthModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsPageModule
    ],
    // providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
