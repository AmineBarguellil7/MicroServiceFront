import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from '../models/Departement';
import { DataService } from '../service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  @ViewChild("f") signupForm:NgForm;
  departement:Departement=new Departement();
  constructor(private departementService:DataService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.signupForm);
  }

  addDepartement() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ajout avec succés',
      showConfirmButton: false,
      timer: 1000
    })
    console.log(this.departement);
    this.departementService.addDepartement(this.departement).subscribe();
    this.signupForm.reset();
  }

  afficherListeDep() {
    this.router.navigate(['/listeDepartements']);
  }

  SuggestEmplacement() {
    const place="AlManar";
    this.signupForm.form.patchValue({departementData:{
      emplacement:place
    }})
  }
}
