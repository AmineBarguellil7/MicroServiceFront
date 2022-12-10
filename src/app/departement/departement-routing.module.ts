import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { DepartementReactiveComponent } from "./departement-reactive/departement-reactive.component";
import { DepartementComponent } from "./departement.component";
import { DetailDepartementComponent } from "./liste-departement/detail-departement/detail-departement.component";
import { ListeDepartementComponent } from "./liste-departement/liste-departement.component";
import { NotFoundComponent } from "./not-found/not-found.component";


const routes:Routes=[
{path:"listeDepartements",component:ListeDepartementComponent,children:[{path:":id:/:nom/:surface/:emplacement/:prix",component:DetailDepartementComponent}]},{path:"departement",component:DepartementComponent},
{path:"departement-reactive",component:DepartementReactiveComponent},
{path:'**', component:NotFoundComponent}]

@NgModule({
imports:[
    RouterModule.forChild(routes)
],
exports:[RouterModule]
})
export class DepartementRoutingModule {

}