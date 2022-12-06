import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/Departement';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-departement',
  templateUrl: './liste-departement.component.html',
  styleUrls: ['./liste-departement.component.css']
})
export class ListeDepartementComponent implements OnInit {

  departement:Departement=new Departement();
  departementAmodifier={
    nomDepart:"",
    emplacement:"",
    prix:"",
    surface:""
  };
  listDepartements:any;  
  constructor(private departementService:DataService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.listDepartements);
    this.departementService.getListDepartements().subscribe(res=>{this.listDepartements=res,console.log(this.listDepartements)});  
  }

  onUpdateDepartement(dep) {
   this.departementAmodifier=dep;
  }

  ModifierDepartement() {
    this.departementService.UpdateDepartement(this.departementAmodifier).subscribe((res)=>{console.log(res)}),
    (err)=>{console.log(err)};
  }
  deleteDepartement(departement:any) {
    Swal.fire({
      title: 'Voulez vous vraiment supprimer ce département de façon permanente?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui',
      cancelButtonText:'annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé!',
          'Fichier supprimé',
          'success'
        )
        this.departementService.deleteDepartement(departement.idDepart).subscribe((res)=>this.departementService.getListDepartements().subscribe(res=>this.listDepartements=res));
        }
    })
  }    
  
}
