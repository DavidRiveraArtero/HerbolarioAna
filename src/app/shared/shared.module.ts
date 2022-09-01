import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './pages/header-menu/header-menu.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HeaderMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HeaderMenuComponent
  ]
})
export class SharedModule { }
