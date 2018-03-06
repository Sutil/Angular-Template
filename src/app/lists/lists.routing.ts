import { ListsComponent } from './lists.component';
import { ClienteComponent } from './../pessoas/cliente/cliente.component';
import { Routes } from '@angular/router';


export const ListsRoutes: Routes = [
    {
        path: 'lists/:obj',
        component: ListsComponent
    },
    {
        path: '',
        children: [
            {path:'clientes', component: ClienteComponent}
        ]
    }
];


