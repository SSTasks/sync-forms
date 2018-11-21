import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FieldConfig } from '../form-controls/field.interface';

@Component({
  selector: 'dynamic-form',
  exportAs: 'dynamicForm',
  template: `
  <form 
    class="dynamic-form"
    [formGroup]="form"
    (submit)="onSubmit($event)"
    >
    <ng-container *ngFor="let field of fields"
                  dynamicField
                  [field]="field"
                  [group]="form">
    </ng-container>
  </form>
  `,
  styles: [`
      mat-form-field {
        display: block;
      }
  `]
})

export class DynamicFormComponent implements OnInit {
  @Input()
  fields: FieldConfig[] = [];

  @Output()
  submit: EventEmitter < any > = new EventEmitter < any > ();

  form: FormGroup;

  get controls() {
      return this.fields.filter(({
          type
      }) => type !== 'button');
  }
  get changes() {
      return this.form.valueChanges;
  }
  get valid() {
      return this.form.valid;
  }
  get value() {
      return this.form.value;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
      this.form = this.createGroup();
  }

  ngOnChanges() {
      if (this.form) {
          const controls = Object.keys(this.form.controls);
          const configControls = this.controls.map((item) => item.name);

          controls
              .filter((control) => !configControls.includes(control))
              .forEach((control) => this.form.removeControl(control));

          configControls
              .filter((control) => !controls.includes(control))
              .forEach((name) => {
                  const config = this.fields.find((control) => control.name === name);
                  this.form.addControl(name, this.createControl(config));
              });

      }
  }

  createGroup() {
      const group = this.fb.group({});
      this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
      return group;
  }

  createControl(config: FieldConfig) {
      const {
          disabled,
          validations,
          value
      } = config;
      return this.fb.control({
          disabled,
          value
      }, this.bindValidations(validations || []));
  }

  handleSubmit(event: Event) {
      event.preventDefault();
      event.stopPropagation();
      this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
      if (this.form.controls[name]) {
          const method = disable ? 'disable' : 'enable';
          this.form.controls[name][method]();
          return;
      }

      this.fields = this.fields.map((item) => {
          if (item.name === name) {
              item.disabled = disable;
          }
          return item;
      });
  }

  setValue(name: string, value: any) {
      this.form.controls[name].setValue(value, {
          emitEvent: true
      });
  }

  remove(name: string, value: any) {
      this.form.controls[name].setValue(value, {
          emitEvent: true
      });
  }

  bindValidations(validations: any) {
      if (validations.length > 0) {
          const validList = [];
          validations.forEach(valid => {
              validList.push(valid.validator);
          });
          return Validators.compose(validList);
      }
      return null;
  }
}