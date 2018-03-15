import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src'

@Injectable()
export class AuthenticationService implements CanActivate {

  constructor() { }

  canActivate(): Observable<boolean>{
    return Observable.of(false);
  }
}
