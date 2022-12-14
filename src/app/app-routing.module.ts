import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratComponent } from './contrat/contrat.component';
import { AfficherEquipeComponent } from './equipe/afficher-equipe/afficher-equipe.component';



const routes: Routes = [{path:'', redirectTo:"home", pathMatch:"full"},
{path:"",loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule)},
{
  path: '', loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule)
},
{
  path:'home', component: AfficherEquipeComponent
},
{
  path: '', loadChildren: () => import('./universite_folder/update-universite/universite.module').then(m => m.UniversiteModule)
},
{path : 'contrat' , component : ContratComponent },
{path :'',loadChildren:()=> import('./contrat/contrat.module').then (m=>m.ContratModule)},
{
  path: "etudiants",
  loadChildren: () =>
    import("./etudiant/etudiant.module").then(
      (m) => m.EtudiantModule
    ),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
