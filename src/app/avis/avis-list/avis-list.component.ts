import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-avis-list',
  templateUrl: './avis-list.component.html',
  styleUrls: ['./avis-list.component.css']
})
export class AvisListComponent implements OnInit {
  addForm:FormGroup;
 avisList:any;
  p:number=1;
  constructor(private avisService:DataService) { }

  ngOnInit(): void {
    this.avisService.getListAvis().subscribe((res)=>this.avisList=res);
  }
  OnAvisDeleted() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'avissupprime',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
