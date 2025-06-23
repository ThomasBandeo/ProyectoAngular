import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { IndumentariaRopasComponent } from './indumentaria-ropas/indumentaria-ropas.component';
import { IndumentariaAboutComponent } from './indumentaria-about/indumentaria-about.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {                           //raiz de nuestro proyecto
    path : '' , 
    redirectTo: 'ropas',
    pathMatch: 'full' 
  },
  { 
    path : 'ropas' , 
    component: IndumentariaRopasComponent
  },
  { 
    path : 'about' , 
    component: IndumentariaAboutComponent
  },
  { 
    path : 'login' , 
    component: SignUpComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
