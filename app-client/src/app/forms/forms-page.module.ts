import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {GestureConfig} from '@angular/material';
import {MaterialModule} from '../modules/material/material';

import {MainNavComponent} from './main-nav/main-nav.component';
import {NavConstructorComponent} from './main-nav/nav-constructor/nav-constructor.component';
import {NavListComponent} from './main-nav/nav-list/nav-list.component';

import {ElementTypePipe} from './pipes/element-type.pipe';

import {GetElementBroadcastService} from './services/get-element.broadcast.service';
import {SetElementBroadcastService} from './services/set-element.broadcast.service';

@NgModule({
    declarations: [
        MainNavComponent,
        NavConstructorComponent,
        NavListComponent,
        ElementTypePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig},
        GetElementBroadcastService,
        SetElementBroadcastService
    ],
})
export class FormsPageModule {
}
