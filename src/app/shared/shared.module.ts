import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderMenuComponent } from './pages/header-menu/header-menu.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    HeaderMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    HeaderMenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
