import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-avisitem',
  templateUrl: './avisitem.component.html',
  styleUrls: ['./avisitem.component.css']
})
export class AvisitemComponent implements OnInit {
  @Output() avisDeleted=new EventEmitter();
  @Input() avis:{idAvis:number,evaluation:number,commentaire:string,date_soumission_avis:Date};
  avisList:any;
  constructor(private avisService:DataService) { }

  ngOnInit(): void {
    this.avisService.getListAvis().subscribe((res)=>this.avisList=res);
  }
  OnDeleteAvis(avis) {
    this.avisService.deleteAvis(avis.idAvis).subscribe(); 
    this.avisDeleted.emit();  
  }

}
