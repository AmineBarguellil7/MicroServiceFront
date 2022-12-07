import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DepartementRoutingModule } from "./departement-routing.module";
import { DepartementComponent } from "./departement.component";
import { DetailDepartementComponent } from "./liste-departement/detail-departement/detail-departement.component";
import { ListeDepartementComponent } from "./liste-departement/liste-departement.component";


@NgModule({
    declarations:[
        DepartementComponent,
    ListeDepartementComponent,
    DetailDepartementComponent
    ],
    imports:[
        RouterModule,CommonModule,FormsModule,DepartementRoutingModule
    ],
    exports:[
        DepartementComponent,
        ListeDepartementComponent,
        DetailDepartementComponent
    ]
})
export class DepartementModule {

}