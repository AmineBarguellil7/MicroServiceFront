import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement/departement.component';
import { ListeDepartementComponent } from './departement/liste-departement/liste-departement.component';
import { NotFoundComponent } from './departement/not-found/not-found.component';

const routes: Routes = [{path:'', redirectTo:"departement", pathMatch:"full"},
{path:"listeDepartements",component:ListeDepartementComponent},
{path:"departement",component:DepartementComponent},
{path:'**', component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
