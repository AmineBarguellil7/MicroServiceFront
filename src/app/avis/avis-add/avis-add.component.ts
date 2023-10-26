import { Component, OnInit } from '@angular/core';
import { Avis } from '../../models/Avis';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-avis-add',
  templateUrl: './avis-add.component.html',
  styleUrls: ['./avis-add.component.css']
})
export class AvisAddComponent implements OnInit {
  avis:Avis=new Avis();
  addForm:FormGroup;
  constructor(private avisService:DataService) { }



  ngOnInit(): void {
    this.addForm=new FormGroup({
      'evaluation':new FormControl('0',Validators.required),
      'commentaire':new FormControl('null',Validators.required)
    
    })
  }
  OnSubmit() {
    this.avis.evaluation=this.addForm.value.evaluation;
    this.avis.commentaire=this.addForm.value.commentaire;
  
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ajout avec succés',
      showConfirmButton: false,
      timer: 1000
    })
    this.avisService.addAvis(this.avis).subscribe();
    this.addForm.reset();
  }

}
