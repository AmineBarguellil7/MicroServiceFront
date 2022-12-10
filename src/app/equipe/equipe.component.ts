import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from '../models/equipe';
import { DataService } from '../service/data.service';
import Swal from "sweetalert2";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
 equipe = new Equipe();
 data:any;
 res:any;
 class="form-control"
  toastInstance: any;
  myForm:FormGroup;

  submitted = false ;
  equipes:any;
  constructor(private router:Router, private dataService:DataService, private Route:ActivatedRoute, private formBuilder: FormBuilder) { 
    this.toastInstance = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
  });
  }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      equipe:new FormControl('',Validators.required),
      salle:new FormControl('', Validators.required),
      thematique:new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]),
      
  
    })
  this.getEquipes;}
    
    get myControls(){
      
        return this.myForm.controls;
  }

  getEquipes(){
    this.dataService.getEquipes().subscribe(res => {
      this.equipes=res;
    }
      );
  }
  addEquipe(f){
    console.log(this.equipe);
    
    this.submitted = true ;
      this.dataService.addEquipe(this.equipe).subscribe({
        next:(data:any)=>{
          
          this.toastInstance.fire({
            icon: 'success',
            title: "Equipe ajoutée avec succes"
        });
          this.data =data ;
        },
        error:(err:any)=>{
          this.toastInstance.fire({
            icon: 'error',
            title: "Equipe non ajoutée"
        });      },
       
      }) 
    }
    
}

