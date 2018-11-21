import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from './field.interface';

@Component({
  selector: 'app-toggle',
  template: `
  <div [formGroup]="group" >
    <mat-slide-toggle [formControlName]="field.name">{{field.label}}</mat-slide-toggle>
  </div>
  `,
  styles: []
})
export class ToggleComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
