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
        {type: 'text', label: 'elem 1', options: []},
        {type: 'number', label: 'elem 2', options: []},
        {type: 'textarea', label: 'elem 3', options: []},
        {type: 'select', label: 'elem 4', options: ['Option 1', 'Option 2', 'Option 3']},
        {type: 'checkbox', label: 'elem 5', options: ['Option 1', 'Option 2']},
        {type: 'radio', label: 'elem 6', options: ['Option 1', 'Option 2']},
        {type: 'button', label: 'elem 7', options: ['primary', 'warn']}
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
