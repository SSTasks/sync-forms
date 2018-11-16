import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {GestureConfig} from '@angular/material';
import {MaterialModule} from '../modules/material/material';

import {ElementTypePipe} from './pipes/element-type.pipe';

import {BroadcastService} from './services/broadcast.service';
import {SocketService} from './services/socket-service.service';
import {HttpService} from './services/http.service';

// import {MainNavComponent} from './main-nav/main-nav.component';
import {NavConstructorComponent} from './constructor-page/nav-constructor/nav-constructor.component';
import {NavListComponent} from './preview-page/nav-list/nav-list.component';
import {NavConfigComponent} from './constructor-page/nav-config/nav-config.component';

import {InterviewPageComponent} from './interview-page/interview-page.component';
import {PreviewPageComponent} from './preview-page/preview-page.component';
import {ConstructorPageComponent} from './constructor-page/constructor-page.component';
import { ScreenshotService } from './services/screenshot.service';
import { ConfirmRemovingFormComponent } from '../options/confirm-removing-form/confirm-removing-form.component';
import { FormScreenshotComponent } from './constructor-page/form-screenshot/form-screenshot.component';
import { SnackbarComponent } from '../options/snackbar/snackbar.component';

@NgModule({
    declarations: [
        NavConstructorComponent,
        NavListComponent,
        NavConfigComponent,
        ElementTypePipe,
        InterviewPageComponent,
        PreviewPageComponent,
        ConstructorPageComponent,
        ConfirmRemovingFormComponent,
        FormScreenshotComponent,
        SnackbarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    providers: [
        BroadcastService,
        HttpService, {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig},
        SocketService,
        ScreenshotService,
        FormScreenshotComponent,
        SnackbarComponent
    ],
    entryComponents: [ConfirmRemovingFormComponent],
})
export class FormsPageModule {
}
