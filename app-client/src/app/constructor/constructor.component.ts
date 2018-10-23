import {Component, OnInit, ViewChild} from '@angular/core';
import {DropzonesService} from '../services/dropzones.service';

import {Item} from '../services/item.model';

@Component({
    selector: 'app-constructor',
    templateUrl: './constructor.component.html',
    styleUrls: ['./constructor.component.scss']
})
export class FormComponent implements OnInit {

    paletteItems: Item[] = [
        {type: 'text', label: 'text', config: {}, options: []},
        {
            type: 'slider',
            label: 'slider',
            config: {
                disabled: false,
                invert: false,
                min: 0,
                max: 1000,
                showTicks: false,
                step: 1,
                thumbLabel: true,
                value: 0,
                vertical: true
            },
            options: []},
        {type: 'toggle', label: 'toggle', config: {}, options: []},
        {type: 'textarea', label: 'textarea', config: {}, options: []},
        {type: 'select', label: 'select', config: {}, options: ['Option 1', 'Option 2', 'Option 3']},
        {type: 'checkbox', label: 'checkbox', config: {}, options: ['Option 1', 'Option 2']},
        {type: 'radio', label: 'radio', config: {}, options: ['Option 1', 'Option 2']},
        {type: 'button', label: 'button', config: {}, options: ['primary', 'warn']}
    ];

    constructor(
        private dropZones: DropzonesService,
    ) { }

    ngOnInit() {
    }

    drop(event) {
        this.dropZones.moveInList(event);
    }

}
