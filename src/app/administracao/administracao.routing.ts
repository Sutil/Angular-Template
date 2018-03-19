import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { AuthenticationService } from './../authentication/authentication.service';
import { Routes } from '@angular/router';

export const administracaoRouting: Routes = [
    {
        path: 'administracao',
        canActivate: [AuthenticationService],
        children: [
            {path: 'marca', component: MarcaListComponent}
        ]
    }
];