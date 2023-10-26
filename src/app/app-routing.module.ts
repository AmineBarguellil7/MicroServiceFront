import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{path:'', redirectTo:"home", pathMatch:"full"},
{path:"",loadChildren: () => import('./avis/avis.module').then(m => m.AvisModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
