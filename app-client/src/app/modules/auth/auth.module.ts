import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatIconModule, MatToolbarModule, MatMenuModule} from '@angular/material';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

import { ConfirmEqualValidatorDirective } from 'src/app/directives/confirm-equal-validator.directive';
import { HttpService } from 'src/app/services/http.service';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from '../material/material';

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
    providers: [HttpService],
})
export class AuthModule {}