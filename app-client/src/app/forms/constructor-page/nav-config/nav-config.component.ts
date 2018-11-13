import {Component, OnInit} from '@angular/core';

import {BroadcastService} from '../../services/broadcast.service';


@Component({
    selector: 'app-nav-config',
    templateUrl: './nav-config.component.html',
    styleUrls: ['./nav-config.component.scss']
})
export class NavConfigComponent implements OnInit {

    config: any;

    constructor(private broadcast: BroadcastService) {
        this.broadcast.subscriberActivationConfig()
            .subscribe(
                config => {
                    this.config = config;
                    console.log(this.config);
                    console.log(this.config.hasOwnProperty('options'));
                });
    }

    ngOnInit() {
        this.config = {
            options: []
        };
    }

    addOption() {
        this.config.options.push('text');
    }

    delOption(index) {
        this.config.options.splice(index, 1);
    }

    // for ngModel in array
    customTrackBy(index: number, obj: any): any {
        return index;
    }
}


