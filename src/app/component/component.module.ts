import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from './UserPage/carrousel/carrousel.component';
import { HomeComponent } from './UserPage/home/home.component';
import { MaterialModule } from '../material/material.module';
import { ProductoCarrouselComponent } from './UserPage/producto-carrousel/producto-carrousel.component';

@NgModule({
  declarations: [
    CarrouselComponent,
    HomeComponent,
    ProductoCarrouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,


  ],
  exports:[
    CarrouselComponent,
  ]
})
export class ComponentModule { }
