import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../models/Departement';
import { Equipe } from '../models/equipe'; 
import { Universite } from '../models/Universite';
import { Contrat } from '../models/contrat';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getdepartementUrl="http://localhost:8082/departement";
  public AjoutdepartementUrl='http://localhost:8082/departement';
  public UpdatedepartementUrl="http://localhost:8082/departement";
  public DeletedepartementUrl="http://localhost:8082/departement/";
  public getdepartementByIdUrl="http://localhost:8082/departement/"
  public ahmedUrl = 'http://localhost:8082/equipe';
  constructor(private http:HttpClient) { }
addEquipe(equipe?: Equipe): Observable<Object>{
  return this.http.post<Object>(`${this.ahmedUrl}`, equipe) ;
}
getEquipes (){
  return this.http.get(this.ahmedUrl) ;
}
deleteEquipe(idT: any){
  return this.http.delete('http://localhost:8082/equipe/'+idT) ;
}
updateEquipe(data: any){
  return this.http.put('http://localhost:8082/equipe/',data) ;
}
getEquipeById(idT: any){
  return this.http.get('http://localhost:8082/equipe/'+idT) ;
}



addDepartement(departement:Departement):Observable<Object> {
return this.http.post<Object>(this.AjoutdepartementUrl,departement);
}

getListDepartements() {
  return this.http.get(this.getdepartementUrl);
}

UpdateDepartement(departement){
return this.http.put(this.UpdatedepartementUrl,departement);
}

deleteDepartement(idDepart:any){
  return this.http.delete(this.DeletedepartementUrl+idDepart);
}
getDepartementById(idDepart:any) {
  return this.http.get(this.getdepartementByIdUrl+idDepart);
}
adduniversite(universite?: Universite): Observable<Object>{
  return this.http.post<Object>('http://localhost:8082/universite/' ,universite) ;
}
retriveAllUniversite() {
  return this.http.get('http://localhost:8082/universite/');
}
deleteUniversite(idUniversite:any){
  return this.http.delete('http://localhost:8082/universite/'+idUniversite);
}
getById(idUniversite:any) {
  return this.http.get('http://localhost:8082/universite/'+idUniversite);
}
updateUniversite(data: any){
  return this.http.put('http://localhost:8082/universite/',data) ;
}

addContrat(contrat?:Contrat): Observable<Object> {
  return this.http.post<Object>('http://localhost:8082/contrat/',contrat);
  }
  
  getAllContrats() {
    return this.http.get('http://localhost:8082/contrat/');
  }
  
  UpdateContrat(contrat:Contrat){
  return this.http.put('http://localhost:8082/contrat/',contrat);
  }
  
  deleteContrat(idContrat:any){
    return this.http.delete('http://localhost:8082/contrat/'+idContrat);
  }
  getContratById(idContrat:any) {
    return this.http.get('http://localhost:8082/contrat/'+idContrat);
  }
}
