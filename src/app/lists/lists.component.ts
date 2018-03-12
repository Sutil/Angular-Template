import { ListsService } from './lists.service';
import { Person } from './../models/person.model';
import { ColumnObj, ObjectConfig } from './../data/model.object';
import { DataObject } from './../data/config.data';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


@Component({
    moduleId: module.id,
    selector: 'lists',
    styleUrls: ['lists.component.css'],
    templateUrl: 'lists.component.html'
})
export class ListsComponent implements OnInit, AfterViewInit {

    constructor(private service: ListsService,
        private activatedRoute: ActivatedRoute,
        private dataObject: DataObject) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            params => {
                this.obj = params['obj'];
                this.config = this.dataObject.findConfig(this.obj);
            }
        );

        this.dataList.sort = this.sort;
        this.dataList.paginator = this.paginator;
        this.columns = this.config.columns;
        this.displayedColumns = this.columns.map(c => c.def);
    }

    obj: string = "";
    config: ObjectConfig;
    dataList = new MatTableDataSource();
    columns = [];
    displayedColumns: string[] = [];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;


    ngAfterViewInit() {

        this.service.findAll(this.config.urlFindAll)
            .subscribe(data => {
                this.dataList.data = data;
            });

    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataList.filter = filterValue;
    }
}
