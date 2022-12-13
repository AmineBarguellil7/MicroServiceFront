import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherEquipeComponent } from './equipe/afficher-equipe/afficher-equipe.component';



const routes: Routes = [{path:'', redirectTo:"home", pathMatch:"full"},
{path:"",loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule)},
{
  path: '', loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule)
},
{
  path:'home', component: AfficherEquipeComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
