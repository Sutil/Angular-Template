import { DataObject } from './../data/config.data';
import { ListsComponent } from './lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListsRoutes } from './lists.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClienteComponent } from '../pessoas/cliente/cliente.component';

@NgModule({
  imports:[
      CommonModule,
      RouterModule.forChild(ListsRoutes),
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [
      ListsComponent,
      ClienteComponent
  ] ,
  providers:[
    DataObject
  ]
})
export class ListsModule {}
