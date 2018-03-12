import { ObjectConfig } from './../data/model.object';
import { DataObject } from './../data/config.data';
import { Person } from './../models/person.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ListsService {

  constructor(protected dataObject: DataObject, protected http: HttpClient) { }

  __memoryData: any[];

  findAll(urlFindAll:string) :Observable<any[]> {
    return this.http.get<any>(urlFindAll);
  }

}
