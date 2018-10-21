import {NgModule} from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule
} from '@angular/material';

@NgModule({
    imports: [
        MatListModule,
        MatSidenavModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule
    ],
    exports: [
        MatListModule,
        MatSidenavModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule
    ],
})
export class MaterialModule {}
