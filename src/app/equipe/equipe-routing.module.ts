import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEquipeComponent } from './edit-equipe/edit-equipe.component';
import { EquipeComponent } from './equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

const routes: Routes = [
  {
    path: 'addequipe',
    component: EquipeComponent
},
{
  path: 'equipes',
  component: ListEquipeComponent,
},
{
    path:'equipes/modifier/:idT', component: EditEquipeComponent,
    children: [
      {
        path:'refresh', component: ListEquipeComponent
      },]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
