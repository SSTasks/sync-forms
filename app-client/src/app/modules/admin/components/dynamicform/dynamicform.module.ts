import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from '../../../material/material';

import { InputComponent } from './form-controls/input.component';
import { SelectComponent } from './form-controls/select.component';
import { ToggleComponent } from './form-controls/toggle.component';
import { ButtonComponent } from './form-controls/button.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form-container/dynamic-form-container.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputComponent,
    SelectComponent,
    ToggleComponent,
    ButtonComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    InputComponent,
    SelectComponent,
    ToggleComponent,
    ButtonComponent
  ]
})
export class DynamicformModule { }
