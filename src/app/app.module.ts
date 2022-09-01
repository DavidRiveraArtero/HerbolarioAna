import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MODULOS PROPIOS
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { ComponentModule } from './component/component.module';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
//COMPONENTES PROPIOS

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentModule,
    AppRoutingRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
