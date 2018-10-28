import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Form} from '../services/form';
import {GetElementBroadcastService} from '../services/get-element.broadcast.service';
import {SetElementBroadcastService} from '../services/set-element.broadcast.service';

const form1 = {
    title: 'New form',
    author: 'Ya',
    preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
    groups: ['Dnipro'],
    rows: [
        {
            cells: [
                {
                    elements: [{
                        label: 'name',
                        type: 'text',
                        handlers: [],
                        config: {
                            value: '0_o',
                            placeholder: 'X_x',
                            disabled: true
                        }
                    }]
                },
                {
                    elements: [{
                        label: 'price',
                        type: 'number',
                        handlers: [],
                        config: {
                            value: '123',
                            placeholder: 'X_x',
                            min: 3,
                            max: 10,
                            disabled: false
                        }
                    }]
                },
                {
                    elements: [{
                        label: 'Your password',
                        type: 'password',
                        handlers: [],
                        config: {
                            value: '0_o',
                            placeholder: 'X_x',
                            disabled: false
                        }
                    }]
                },
            ]
        },
        {
            cells: [
                {
                    elements: [{
                        label: 'Level of water',
                        type: 'slider',
                        handlers: [],
                        config: {
                            value: 120,
                            invert: false,
                            min: 5,
                            max: 350,
                            step: 5,
                            thumbLabel: true,
                            vertical: false,
                            disabled: false
                        }
                    }]
                },
                {
                    elements: [{
                        label: 'Click me!',
                        type: 'toggle',
                        handlers: [],
                        config: {
                            color: 'primary',
                            checked: true,
                            disabled: false
                        }
                    }]
                },
                {
                    elements: [{
                        label: 'Choose city',
                        type: 'select',
                        handlers: [],
                        config: {
                            value: '0_o',
                            placeholder: 'X_x',
                            disabled: true,
                            options: ['Dnipro', 'Lviv']
                        }
                    }]
                },
            ]
        },
        {
            cells: [
                {
                    elements: [{
                        label: 'Description',
                        type: 'textarea',
                        handlers: [],
                        config: {
                            value: '0_o',
                            placeholder: 'X_x',
                            disabled: true
                        }
                    }]
                },
                {
                    elements: [{
                        label: 'Prod',
                        type: 'button',
                        handlers: [],
                        config: {
                            type: 'mat-raised-button',
                            color: 'warn',
                            disabled: false
                        }
                    }]
                },
                {
                    elements: []
                }
            ]
        },
        {
            cells: [
                {
                    elements: [{
                        label: 'Company:',
                        type: 'radio',
                        handlers: [],
                        config: {
                            color: 'warn',
                            disabled: false,
                            options: ['Sumsung', 'Sony', 'Panasonic']
                        }
                    }]
                }
            ]
        },
        {
            cells: [
                {
                    elements: [{
                        label: 'Company:',
                        type: 'checkbox',
                        handlers: [],
                        config: {
                            color: 'warn',
                            disabled: false,
                            options: ['Sumsung', 'Sony', 'Panasonic']
                        }
                    }]
                }
            ]
        }
    ],
    description: ''
};
const form2 = {
    title: 'New form',
    author: 'Ya',
    preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
    groups: ['Dnipro'],
    rows: [],
    description: ''
};

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
    public options: FormGroup;
    public form: Form;
    private elemParams: any;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(
        private breakpointObserver: BreakpointObserver,
        private fb: FormBuilder,
        private activationConstructor: GetElementBroadcastService,
        private setElem: SetElementBroadcastService) {

        this.setElem.subscriber()
            .subscribe(
                elem => {
                    this.pushElem(elem);
                });

        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }

    ngOnInit() {
        this.form = form2;
    }

    addRow() {
        this.form.rows.push({cells: []});
    }

    delRow(rowIndex) {
        this.form.rows.splice(rowIndex, 1);
    }

    addCell(rowIndex) {
        this.form.rows[rowIndex].cells.push({elements: []});
    }

    delCell(rowIndex, cellIndex) {
        this.form.rows[rowIndex].cells.splice(cellIndex, 1);
    }

    addElem(rowIndex, cellIndex) {
        this.elemParams = {row: rowIndex, cell: cellIndex};
        this.activationConstructor.activationConstructor();
    }

    pushElem(elem) {
        this.form.rows[this.elemParams.row].cells[this.elemParams.cell].elements.push(elem);
    }

    delElem(rowIndex, cellIndex) {
        this.form.rows[rowIndex].cells[cellIndex].elements.splice(0, 1);
    }
}

