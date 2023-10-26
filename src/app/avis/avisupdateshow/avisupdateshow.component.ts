import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Avis } from 'src/app/models/Avis';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-avisupdateshow',
  templateUrl: './avisupdateshow.component.html',
  styleUrls: ['./avisupdateshow.component.css']
})
export class AvisupdateshowComponent implements OnInit {

 
  Id:number;
  avis:Avis=new Avis();
  avisAmodifier={
    evaluation:"",
    commentaire:""
   
  };
  listAvis:any;  
  constructor(private avisService:DataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.listAvis);
    this.avisService.getListAvis().subscribe(res=>{this.listAvis=res,console.log(this.listAvis)});  
  }
  onUpdateAvis(avis) {
    this.avisAmodifier=avis;
   }
   ModifierAvis() {
    Swal.fire({
      title: 'Souhaitez-vous enregistrer les modifications ?',
      showDenyButton: true,
      confirmButtonText: 'enregistrer',
      denyButtonText: `annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('modification avec succès!', '', 'success')
        this.avisService.UpdateAvis(this.avisAmodifier).subscribe((res)=>{console.log(res)}),
    (err)=>{console.log(err)};
      } else if (result.isDenied) {
        this.avisService.getListAvis().subscribe((res)=>this.listAvis=res);
        Swal.fire('les modifications ne sont pas enregistrées', '', 'info')
      }
    })
  }
  deleteAvis(avis:any) {
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
      'success')
      this.avisService.deleteAvis(avis.idAvis).subscribe((res)=>this.avisService.getListAvis().subscribe(res=>this.listAvis=res));
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Annulé',
        'Avis non supprimé',
        'error'
      )
    }
  })
}
ShowDetails(id:number,evaluation:number,commentaire:string,date_soumission_avis:Date) {
  this.router.navigate(['/listeAvis/'+id,evaluation,commentaire,date_soumission_avis]);
} 
AfficherList() {
  this.avisService.getListAvis().subscribe((res)=>this.listAvis=res);
}}