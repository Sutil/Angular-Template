import { AuthenticationServiceMock } from './../mock-service/authentication.service.mock';
import { AuthenticationService } from './../authentication/authentication.service';
import { environment } from './../../environments/environment';
import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';


const SERVICES: Provider[] = environment.production ? 
  [] : [
    {provide: AuthenticationService, useClass: AuthenticationServiceMock}
  ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataModule,
      providers: [...SERVICES]
    }
  }
}
