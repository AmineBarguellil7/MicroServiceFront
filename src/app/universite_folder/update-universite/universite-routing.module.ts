import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversiteComponent } from './universite/universite.component';
import { UpdateUniversiteComponent } from './update-universite.component';

const routes: Routes = [{
  path: 'universites',
  component: ListUniversiteComponent
},
{
  path: 'adduniversite',
  component: UniversiteComponent
},
{
  path: 'universites/updateuniversite/:idUniv',
  component: UpdateUniversiteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
