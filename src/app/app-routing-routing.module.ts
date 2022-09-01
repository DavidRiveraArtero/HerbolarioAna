import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // RUTA HOME LA PRINCIPAL
    path:'',
    loadChildren:() => import('./component/UserPage/user-routin.module')
                        .then(m=>m.UserRoutinModule)
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
