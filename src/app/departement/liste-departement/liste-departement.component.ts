import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/models/Departement';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-liste-departement',
  templateUrl: './liste-departement.component.html',
  styleUrls: ['./liste-departement.component.css']
})
export class ListeDepartementComponent implements OnInit {

  nom:string="";
  Id:number;
  departement:Departement=new Departement();
  departementAmodifier={
    nomDepart:"",
    emplacement:"",
    prix:"",
    surface:""
  };
  listDepartements:any;  
  constructor(private departementService:DataService,private router:Router,private route:ActivatedRoute) { }

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
  ShowDetails(id:number,nomDepart:string,emplacement:string,surface:string,prix:string) {
    this.router.navigate(['/listeDepartements/'+id,nomDepart,emplacement,surface,prix]);
  }    

  SearchDepartementById(Id:any) {
    this.departementService.getDepartementById(Id).subscribe((res)=>{
      this.listDepartements=[res];
      setTimeout(() => {
       this.listDepartements=this.departementService.getListDepartements().subscribe((res)=>this.listDepartements=res);
      },3000)
    });
  }
  TestStatus(nomD:string) {
    if (nomD=="") {
      return false;
    }
    if (nomD.startsWith(this.nom)) {
      return false;
    }
    else {
      return true;
    }
  }
}
