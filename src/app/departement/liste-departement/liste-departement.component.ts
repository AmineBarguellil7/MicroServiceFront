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
  Id:string="";
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
    Swal.fire({
      title: 'Souhaitez-vous enregistrer les modifications ?',
      showDenyButton: true,
      confirmButtonText: 'enregistrer',
      denyButtonText: `annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('modification avec succès!', '', 'success')
        this.departementService.UpdateDepartement(this.departementAmodifier).subscribe((res)=>{console.log(res)}),
    (err)=>{console.log(err)};
      } else if (result.isDenied) {
        this.departementService.getListDepartements().subscribe((res)=>this.listDepartements=res);
        Swal.fire('les modifications ne sont pas enregistrées', '', 'info')
      }
    })
  }
  deleteDepartement(departement:any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Vous Etes sur?',
      text: "vous ne pouvez pas revenir en arrière!",
      icon: 'warning',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Annuler',
      showCancelButton: true,
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Supprimé!',
          'Departement supprimé',
          'success'
        )
        this.departementService.deleteDepartement(departement.idDepart).subscribe((res)=>this.departementService.getListDepartements().subscribe(res=>this.listDepartements=res));
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          'Departement non supprimé',
          'error'
        )
      }
    })
  }
  ShowDetails(id:number,nomDepart:string,emplacement:string,surface:string,prix:string) {
    this.router.navigate(['/listeDepartements/'+id,nomDepart,emplacement,surface,prix]);
  }    

  SearchDepartementById(id:string) {
    if (this.Id=="") {
      return true;
    }
    if (id==this.Id) {
      return true;
    }
    return false;
  }
  TestStatus(nomD:string) {
    if (this.nom=="") {
      return false;
    }
    if (nomD.startsWith(this.nom)) {
      return false;
    }
    else {
      return true;
    }
  }

  TriSurface() {
    this.listDepartements.sort((a, b) => a.surface - b.surface);
  }

  AfficherList() {
    this.departementService.getListDepartements().subscribe((res)=>this.listDepartements=res);
  }
  TriEmplacement() {
    this.listDepartements.sort(function(a,b) { return a.emplacement.localeCompare(b.emplacement)});
  }
}
