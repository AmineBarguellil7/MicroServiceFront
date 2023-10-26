import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-avisdetails',
  templateUrl: './avisdetails.component.html',
  styleUrls: ['./avisdetails.component.css']
})
export class AvisdetailsComponent implements OnInit {

  
  avis:{idAvis:number,evaluation:number,commentaire:string,date_soumission_avis:Date};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.avis={
      idAvis:this.route.snapshot.params['id'],
      evaluation:this.route.snapshot.params['evaluation'],
      commentaire:this.route.snapshot.params['commentaire'],
      date_soumission_avis:this.route.snapshot.params['date_soumission_avis'],
    
    }
    this.route.params.subscribe((params:Params)=>{this.avis={
      idAvis:this.route.snapshot.params['id'],
      evaluation:this.route.snapshot.params['evaluation'],
      commentaire:this.route.snapshot.params['commentaire'],
      date_soumission_avis:this.route.snapshot.params['date_soumission_avis'],
  
    }})
  }
}
