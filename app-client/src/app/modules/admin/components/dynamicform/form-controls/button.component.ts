import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from './field.interface';

@Component({
  selector: 'app-button',
  template: `
  <button [type]="field.name" mat-raised-button [color]="field.color" [formGroup]="group">{{field.label}}</button>
  `,
  styles: [`
  button {
    margin: 8px 8px 0 0;
  }`]
})

export class ButtonComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

  field: FieldConfig;
  group: FormGroup;
}
