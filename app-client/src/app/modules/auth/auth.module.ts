import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

import { ConfirmEqualValidatorDirective } from 'src/app/directives/confirm-equal-validator.directive';


import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [LoginComponent, AuthComponent, ConfirmEqualValidatorDirective],
    imports: [
        CommonModule,
        HttpClientModule,
        HttpModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    exports: [LoginComponent, AuthComponent, ConfirmEqualValidatorDirective],
    providers: [
        AlertService,
        AuthService
    ],
})
export class AuthModule {} 