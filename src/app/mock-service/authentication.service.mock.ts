import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from './../authentication/authentication.service';


export class AuthenticationServiceMock extends AuthenticationService {

    canActivate(): Observable<boolean>{
        return Observable.of(true);
    }
}