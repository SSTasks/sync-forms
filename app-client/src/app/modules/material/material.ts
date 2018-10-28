import { NgModule } from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatSliderModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatListModule,
    MatTreeModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
    imports: [
        LayoutModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatMenuModule,
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatSliderModule,
        MatRadioModule,
        MatSelectModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatListModule,
        MatTreeModule
    ],
    exports: [
        LayoutModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatMenuModule,
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatSliderModule,
        MatRadioModule,
        MatSelectModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatListModule,
        MatTreeModule
    ],
})
export class MaterialModule {}
