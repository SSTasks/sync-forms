import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material';
import {TeamComponent} from './team/team.component';
import {HttpService} from './services/http.service';
import {ConstructorComponent} from './form/form.component';
import {FormComponent} from './constructor/constructor.component';
import {DropzonesService} from './services/dropzones.service';
import {OptionsComponent} from './options/options.component';
import {BroadcastElemService} from './services/broadcastElem.service';
import {BroadcastChangesService} from './services/broadcastChanges.service';


@NgModule({
    declarations: [
        AppComponent,
        TeamComponent,
        ConstructorComponent,
        FormComponent,
        OptionsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        DragDropModule,
        MaterialModule,
        FormsModule
    ],
    providers: [HttpService, DropzonesService, BroadcastElemService, BroadcastChangesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
