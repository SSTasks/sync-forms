import { Component, OnInit, ViewChild } from '@angular/core';
import { DropzonesService } from '../services/dropzones.service';
import { CdkDropList, CdkDragDrop } from '@angular/cdk/drag-drop';

import { Item } from '../services/item.model';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class ConstructorComponent implements OnInit {

    canvasItems: Item[] = [];


    constructor(private dropZones: DropzonesService) { }
    // TODO: stronger checking could be done here. Confirm against actual container instances
    drop(event: CdkDragDrop<string[]>) {
        console.log(event);
        // if drop event is from an item that was already on canvas
        if (event.container === event.previousContainer) {
            // sort it based on where it was dropped
            this.dropZones.moveInList(event);
        } else {
            // else the event was from a dropped palette item so add it to the list
            this.dropZones.addToList(event);
        }
    }

    ngOnInit() {
        // this.dropZones.canvasRef = this.canvasDropZone;
    }
}
