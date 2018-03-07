import { Person } from './../models/person.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

@Injectable()
export class ListsService {

  constructor(protected http: Http) { }

  __memoryData: any[];

  findAll(objName:string): Observable<any>{

    let list: any[]  = [];


    this.http.get("./assets/mock/person.mock.json");

    return Observable.of(Person).map(p => p);
  }

}
