import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ArticleRoutingModule } from "./article-routing.module";
import { ArticleComponent } from "./article.component";
import { DetailArticleComponent } from "./liste-article/detail-article/detail-article.component";
import { ListeArticleComponent } from "./liste-article/liste-article.component";
// import { DepartementItemComponent } from './liste-departement/departement-item/departement-item.component';
// import { AfficherListComponent } from './afficher-list/afficher-list.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
    declarations:[
        ArticleComponent,
    ListeArticleComponent,
    DetailArticleComponent,
    // DepartementItemComponent,
    // AfficherListComponent
    ],
    imports:[
        RouterModule,CommonModule,FormsModule,ArticleRoutingModule,ReactiveFormsModule,NgxPaginationModule
    ],
    exports:[
        ArticleComponent,
        ListeArticleComponent,
        DetailArticleComponent
    ]
})
export class ArticleModule {
}