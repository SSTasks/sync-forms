import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Team} from '../services/team';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
    team: Team[];

    constructor(private service: HttpService) { }

    ngOnInit() {
        this.getTeam();
    }

    // get array of pets with HTTP from JSON
    getTeam() {
        this.service.getTeam()
            .subscribe(data => {
                if (data.length) {
                    this.team = data;
                }
            });
    }

    showLink(link) {
        console.log(link);
    }
}
