import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tipo-agenda',
    loadChildren: () => import('./tipo-agenda/tipo-agenda.module').then( m => m.TipoAgendaPageModule)
  },
  {
    path: 'lugares-atencion',
    loadChildren: () => import('./features/lugares-atencion/lugares-atencion.module').then( m => m.LugaresAtencionPageModule)
  },
  {
    path: 'horarios/:id_lugar',
    loadChildren: () => import('./features/horarios/horarios.module').then( m => m.HorariosPageModule)
  },
  {
    path: 'detalles-cita/:id_lugar/:id_horario',
    loadChildren: () => import('./features/detalles-cita/detalles-cita.module').then( m => m.DetallesCitaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./core/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar-user',
    loadChildren: () => import('./core/registrar-user/registrar-user.module').then( m => m.RegistrarUserPageModule)
  },
  {
    path: 'agregar-lugar',
    loadChildren: () => import('./features/lugares-atencion/agregar-lugar/agregar-lugar.module').then( m => m.AgregarLugarPageModule)
  },
  {
    path: 'agregar-horarios/:id_lugar',
    loadChildren: () => import('./features/horarios/agregar-horarios/agregar-horarios.module').then( m => m.AgregarHorariosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
