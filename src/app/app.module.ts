import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RopaListComponent } from './ropa-list/ropa-list.component';

import { FormsModule } from '@angular/forms';
import { IndumentariaAboutComponent } from './indumentaria-about/indumentaria-about.component';
import { IndumentariaRopasComponent } from './indumentaria-ropas/indumentaria-ropas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    RopaListComponent,
    IndumentariaAboutComponent,
    IndumentariaRopasComponent,
    CarritoComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
