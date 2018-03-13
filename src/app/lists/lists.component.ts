import { ListsService } from './lists.service';
import { Person } from './../models/person.model';
import { ColumnObj, ObjectConfig } from './../data/model.object';
import { DataObject } from './../data/config.data';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $:any;
declare var swal:any;

@Component({
    moduleId: module.id,
    selector: 'lists',
    styleUrls: ['lists.component.css'],
    templateUrl: 'lists.component.html'
})
export class ListsComponent implements OnInit, AfterViewInit {

    obj: string = "";
    title: string = "";
    config: ObjectConfig;
    dataList = new MatTableDataSource();
    columns = [];
    displayedColumns: string[] = [];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private service: ListsService,
        private activatedRoute: ActivatedRoute,
        private dataObject: DataObject) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            params => {
                this.obj = params['obj'];
                this.config = this.dataObject.findConfig(this.obj);
                this.defineConfigs();
            }
        );

        this.dataList.sort = this.sort;
        this.dataList.paginator = this.paginator;
    }

    defineConfigs(){
        this.title = this.config.title;
        this.columns = this.config.columns;
        this.displayedColumns = this.columns.map(c => c.def).concat('action');
    }

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

    showMessage(){
        swal({
            title: 'Tem certeza que deseja excluir ?',
            text: "Esta operação não poderá ser desfeita!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-danger',
            cancelButtonClass: 'btn btn-basic',
            confirmButtonText: 'Sim, excluir!',
            cancelButtonText:"Cancelar",
            buttonsStyling: false
        }).then(function() {
          swal({
            title: 'Excluido!',
            text: 'Este registro foi excluído.',
            type: 'success',
            confirmButtonClass: "btn btn-success",
            buttonsStyling: false
            });
        });
    }
}
