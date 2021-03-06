import { UsuarioGuard } from './guards/usuario-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';

const appRouter: Routes = [
  { path: '', component: LoginComponent},
  { 
    path: 'mensajes', 
    component: MensajesComponent,
    canActivate:[ UsuarioGuard ]
  },
  { path: '**', component: LoginComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot( appRouter ) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
