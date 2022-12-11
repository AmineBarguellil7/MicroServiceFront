import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DepartementRoutingModule } from "./departement-routing.module";
import { DepartementComponent } from "./departement.component";
import { DetailDepartementComponent } from "./liste-departement/detail-departement/detail-departement.component";
import { ListeDepartementComponent } from "./liste-departement/liste-departement.component";
import { DepartementItemComponent } from './liste-departement/departement-item/departement-item.component';
import { DepartementReactiveComponent } from './departement-reactive/departement-reactive.component';
import { AfficherListComponent } from './afficher-list/afficher-list.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
    declarations:[
        DepartementComponent,
    ListeDepartementComponent,
    DetailDepartementComponent,
    DepartementItemComponent,
    DepartementReactiveComponent,
    AfficherListComponent
    ],
    imports:[
        RouterModule,CommonModule,FormsModule,DepartementRoutingModule,ReactiveFormsModule,NgxPaginationModule
    ],
    exports:[
        DepartementComponent,
        ListeDepartementComponent,
        DetailDepartementComponent
    ]
})
export class DepartementModule {
}