import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratComponent } from './contrat/contrat.component';
import { AfficherEquipeComponent } from './equipe/afficher-equipe/afficher-equipe.component';



const routes: Routes = [{path:'', redirectTo:"home", pathMatch:"full"},
{path:"",loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)},
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
{ path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
