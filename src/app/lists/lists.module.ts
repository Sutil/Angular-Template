import { ListsService } from './lists.service';
import { DataObject } from './../data/config.data';
import { ListsComponent } from './lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListsRoutes } from './lists.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClienteComponent } from '../pessoas/cliente/cliente.component';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material'

@NgModule({
  imports:[
      CommonModule,
      RouterModule.forChild(ListsRoutes),
      FormsModule,
      ReactiveFormsModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule
  ],
  declarations: [
      ListsComponent,
      ClienteComponent
  ] ,
  providers:[
    DataObject,
    ListsService
  ]
})
export class ListsModule {}
