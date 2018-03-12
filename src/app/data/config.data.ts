import { user_config } from './../models/user.model';
import { Person, person_config } from './../models/person.model';
import { ObjectConfig, ColumnObj } from './model.object';
import { Injectable } from '@angular/core';



export const configData: ObjectConfig[] = [
    person_config,
    user_config
];

@Injectable()
export class DataObject {

    findDataTable(url:string): ColumnObj[]{
        for(let model of configData){
            if (model.url == url){
                return model.columns;
            }
        }
        return [];
    }

    findConfig(url:string): ObjectConfig {
        for(let model of configData){
            if (model.url == url){
                return model;
            }
        }
        return ;
    }

}