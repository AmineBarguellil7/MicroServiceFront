import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  
  article:{idArc:number,titreArticle:string,contenu:string,auteur:string};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.article={
      idArc:this.route.snapshot.params['id'],
      titreArticle:this.route.snapshot.params['titre'],
      contenu:this.route.snapshot.params['contenu'],
      auteur:this.route.snapshot.params['auteur']
    }
    this.route.params.subscribe((params:Params)=>{this.article={
      idArc:this.route.snapshot.params['id'],
      titreArticle:this.route.snapshot.params['titre'],
      contenu:this.route.snapshot.params['contenu'],
      auteur:this.route.snapshot.params['auteur']
    }})
  }
}
