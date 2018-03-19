import { RouterModule } from '@angular/router';
import { administracaoRouting } from './administracao.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(administracaoRouting)
  ],
  declarations: [MarcaListComponent]
})
export class AdministracaoModule { }
