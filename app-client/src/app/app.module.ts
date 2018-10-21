import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material';
import {TeamComponent} from './team/team.component';
import {HttpService} from './services/http.service';
import {ConstructorComponent} from './form/form.component';
import {FormComponent} from './constructor/constructor.component';
import {DropzonesService} from './services/dropzones.service';


@NgModule({
    declarations: [
        AppComponent,
        TeamComponent,
        ConstructorComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        DragDropModule,
        MaterialModule
    ],
    providers: [HttpService, DropzonesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
