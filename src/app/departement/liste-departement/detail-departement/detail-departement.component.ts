import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-detail-departement',
  templateUrl: './detail-departement.component.html',
  styleUrls: ['./detail-departement.component.css']
})
export class DetailDepartementComponent implements OnInit {

  
  departement:{idDepart:number,nomDepart:string,emplacement:string,surface:string,prix:string};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.departement={
      idDepart:this.route.snapshot.params['id'],
      nomDepart:this.route.snapshot.params['nom'],
      emplacement:this.route.snapshot.params['emplacement'],
      surface:this.route.snapshot.params['surface'],
      prix:this.route.snapshot.params['prix']
    }
    this.route.params.subscribe((params:Params)=>{this.departement={
      idDepart:this.route.snapshot.params['id'],
      nomDepart:this.route.snapshot.params['nom'],
      emplacement:this.route.snapshot.params['emplacement'],
      surface:this.route.snapshot.params['surface'],
      prix:this.route.snapshot.params['prix']
    }})
  }

}
