import { ClienteComponent } from './../pessoas/cliente/cliente.component';
import { Routes } from '@angular/router';


export const ListsRoutes: Routes = [
    {
        path: '',
        children: [
            {path:'clientes', component: ClienteComponent}
        ]
    }
];