import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { AfficherListComponent } from "./afficher-list/afficher-list.component";
import { DepartementReactiveComponent } from "./departement-reactive/departement-reactive.component";
import { DepartementComponent } from "./departement.component";
import { DetailDepartementComponent } from "./liste-departement/detail-departement/detail-departement.component";
import { ListeDepartementComponent } from "./liste-departement/liste-departement.component";



const routes:Routes=[
{path:"listeDepartements",component:ListeDepartementComponent,children:[{path:":id:/:nom/:emplacement/:surface/:prix",component:DetailDepartementComponent}]},{path:"departement",component:DepartementComponent},
{path:"departement-reactive",component:DepartementReactiveComponent},{path:"afficherList",component:AfficherListComponent}
]

@NgModule({
imports:[
    RouterModule.forChild(routes)
],
exports:[RouterModule]
})
export class DepartementRoutingModule {

}