import { Person } from './../models/person.model';
import { ModelObject, ColumnObj } from './model.object';
import { Injectable } from '@angular/core';



export const configData: ModelObject[] = [
    {
        url: "person",
        atributes: "",
        columns: [
            {
                columnDef: "name", 
                header: "Name",
                cell: (row: Person) => `${row.name}`
            }
        ],
        type: Person
    }
];

@Injectable()
export class DataObject {

    findDataTable(url:string) : ColumnObj[]{
        for(let model of configData){
            if (model.url == url){
                return model.columns;
            }
        }
        return [];
    }

}