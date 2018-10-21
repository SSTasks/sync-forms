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
        {type: 'text', label: 'text', options: []},
        {type: 'slider', label: 'slider', options: []},
        {type: 'toggle', label: 'toggle', options: []},
        {type: 'textarea', label: 'textarea', options: []},
        {type: 'select', label: 'select', options: ['Option 1', 'Option 2', 'Option 3']},
        {type: 'checkbox', label: 'checkbox', options: ['Option 1', 'Option 2']},
        {type: 'radio', label: 'radio', options: ['Option 1', 'Option 2']},
        {type: 'button', label: 'button', options: ['primary', 'warn']}
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
