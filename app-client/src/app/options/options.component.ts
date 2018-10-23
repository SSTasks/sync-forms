import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {BroadcastElemService} from '../services/broadcastElem.service';
import {BroadcastChangesService} from '../services/broadcastChanges.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

    type: string;
    autoTicks: boolean;
    disabled: boolean;
    invert: boolean;
    max: number;
    min: number;
    showTicks: boolean;
    step: number;
    thumbLabel: boolean;
    value: number;
    vertical: boolean;

    formActivation: boolean = true;

    constructor(private broadcastElem: BroadcastElemService, private broadcastChanges: BroadcastChangesService) {
        this.broadcastElem.subscriber()
            .subscribe(
                res => {
                    if (res.type) {

                        this.type = res.type;
                        this.autoTicks = res.config.autoTicks;
                        this.disabled = res.config.disabled;
                        this.invert = res.config.invert;
                        this.max = res.config.max;
                        this.min = res.config.min;
                        this.showTicks = res.config.showTicks;
                        this.step = res.config.step;
                        this.thumbLabel = res.config.thumbLabel;
                        this.value = res.config.value;
                        this.vertical = res.config.vertical;

                        this.formActivation = false;
                    } else {
                        this.formActivation = true;
                    }
                }
            );
    }

    ngOnInit() {}

    get tickInterval(): number | 'auto' {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }
    set tickInterval(value) {
        this._tickInterval = coerceNumberProperty(value);
    }

    private _tickInterval = 1;

    change() {
        let elem = {
            autoTicks: this.autoTicks,
            disabled: this.disabled,
            invert: this.invert,
            max: this.max,
            min: this.min,
            showTicks: this.showTicks,
            step: this.step,
            thumbLabel: this.thumbLabel,
            value: this.value,
            vertical: this.vertical
        };
        this.broadcastChanges.setChanges(elem);
    }

}
