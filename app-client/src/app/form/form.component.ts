import { Component, OnInit, ViewChild } from '@angular/core';
import { DropzonesService } from '../services/dropzones.service';
import { CdkDropList, CdkDragDrop } from '@angular/cdk/drag-drop';

import {Item} from '../services/item.model';
import {BroadcastElemService} from '../services/broadcastElem.service';
import {BroadcastChangesService} from '../services/broadcastChanges.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class ConstructorComponent implements OnInit {

    canvasItems: Item[] = [];

    constructor(private dropZones: DropzonesService, private broadcastElem: BroadcastElemService, private broadcastChanges: BroadcastChangesService) {

        this.broadcastChanges.subscriber()
            .subscribe(
                res => {
                    let getElems = this.canvasItems.filter(elem => elem.type === 'slider');
                    let getElem = getElems[0];

                    getElem.config.disabled = res.disabled;
                    getElem.config.invert = res.invert;
                    getElem.config.min = res.min;
                    getElem.config.max = res.max;
                    getElem.config.showTicks = res.showTicks;
                    getElem.config.step = res.getElem;
                    getElem.config.thumbLabel = res.thumbLabel;
                    getElem.config.value = res.value;
                    getElem.config.vertical = res.vertical;
                }
            );
    }
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

    focus(elem) {
        this.broadcastElem.setElem(elem);
    }
}
