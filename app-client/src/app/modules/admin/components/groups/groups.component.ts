import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatMenuTrigger } from '@angular/material';

import { HttpAdminService } from '../../services/http.service';
import { DialogService } from '../../services/dialog.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Group } from 'src/app/models/group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})

export class GroupsComponent implements OnInit {

    constructor(private http: HttpAdminService,
        private dialog: DialogService,
        private message: SnackbarService) {}

    groupsSource: MatTableDataSource < object > ;
    groupsColumnsHeaders: String[];
    private groupsData: Group[];

    @ViewChild('groupsPaginator') groupsPaginator: MatPaginator;
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    ngOnInit() {
        this.getGroups();

        this.groupsColumnsHeaders = this.groupsColumns.map(field => field.title);
    }

    private getGroups(): void {
        this.http.getGroups()
            .subscribe(groups => {
                this.groupsData = groups;
                this.renderGroupsList();
            });
    }

    private initDataSource(data, paginator): MatTableDataSource < object > {
        let dataSource = new MatTableDataSource(data);
        dataSource.paginator = paginator;

        return dataSource;
    }

    private renderGroupsList(): void {
        this.groupsSource = this.initDataSource(this.groupsData, this.groupsPaginator);
    }

    addGroup(): void {
        this.dialog.addGroup()
            .afterClosed()
            .subscribe(data => {
                if (data) {
                    if (this.doExist(data.name, this.groupsData)) {
                        return this.message.show(`${data.name} already exists!`);
                    }
                    this.groupsData.push(data);
                    this.renderGroupsList();

                    this.http.addGroup(data)
                        .subscribe(_ => {
                            this.message.show(`${data.name} was created!`);
                        });
                }
            });
    }

    selectGroup(event): void {
        let name = event.target.parentNode.querySelector('.cdk-column-name').innerText ||
            event.target.innerText;

        this.http.setSelectedGroup(name);
    }

    openContextMenu(event): void {
        this.dialog.openContextMenu(event, this.trigger)
    }

    remove(): void {
        if (this.dialog.target) {
            this.dialog.deleteGroup()
                .afterClosed()
                .subscribe(response => {
                    if (response && response.shouldDelete) {
                        this.removeGroup(this.dialog.target);
                        this.dialog.target = null;
                    }
                });
        }
    }

    edit(): void {
        if (this.dialog.target) {
            this.dialog.editGroup()
                .afterClosed()
                .subscribe(changedGroup => {
                    if(changedGroup) {
                        this.groupsData = this.groupsData.map( group => {
                            if(group.name === this.dialog.target.name) {
                                group = {...group, ...changedGroup};
                            }
                            return group;
                        });
                        this.renderGroupsList();

                        this.http.updateGroup({...changedGroup, previousName: this.dialog.target.name})
                            .subscribe( _ => {
                                console.log(changedGroup, 'was updated');
                                this.dialog.target =  null;
                            }
                    )
                };
            });
        }
    }

    private removeGroup(targetGroup: Group): void {
        this.groupsData = this.groupsData.filter(group => group.name != targetGroup.name);
        this.renderGroupsList();
        this.message.show(`${targetGroup.name}, was removed`);
        this.http.deleteGroup(targetGroup._id)
            .subscribe(_ =>
                this.message.show(`${targetGroup.name}, was removed`)
            );
    }

    private doExist(name: String, array: any): boolean {
        return array.some(group => group.name === name);
    }

    groupsColumns: Array < {
        title: string,
        value: string,
        error: any[]
    } >= [{
            title: "name",
            value: "Title",
            error: [{minlength: "Length > 3"}, {symbol: "Symbol not allowed"}]
        },
        {
            title: "description",
            value: "Description",
            error: [{minlength: "Length > 3"}, {symbol: "Symbol not allowed"}]
        }
    ];
}