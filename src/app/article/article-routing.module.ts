import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
// import { AfficherListComponent } from "./afficher-list/afficher-list.component";
// import { DepartementReactiveComponent } from "./departement-reactive/departement-reactive.component";
import { ArticleComponent } from "./article.component";
import { DetailArticleComponent } from "./liste-article/detail-article/detail-article.component";
import { ListeArticleComponent } from "./liste-article/liste-article.component";



const routes:Routes=[
{path:"listeArticles",component:ListeArticleComponent,children:[{path:":id/:titre/:contenu/:auteur",component:DetailArticleComponent}]},{path:"article",component:ArticleComponent}
]

@NgModule({
imports:[
    RouterModule.forChild(routes)
],
exports:[RouterModule]
})
export class ArticleRoutingModule {

}