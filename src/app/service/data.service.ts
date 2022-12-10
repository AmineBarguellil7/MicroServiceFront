import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../models/Departement';
import { Equipe } from '../models/equipe'; 


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getdepartementUrl="http://localhost:9091/departement";
  public AjoutdepartementUrl='http://localhost:9091/departement/add';
  public UpdatedepartementUrl="http://localhost:9091/departement/update";
  public DeletedepartementUrl="http://localhost:9091/departement/delete/";
  public getdepartementByIdUrl="http://localhost:9091/departement/read_T/"
  public ahmedUrl = 'http://localhost:8081/equipe';
  constructor(private http:HttpClient) { }
addEquipe(equipe?: Equipe): Observable<Object>{
  return this.http.post<Object>(`${this.ahmedUrl}`, equipe) ;
}
getEquipes (){
  return this.http.get(this.ahmedUrl) ;
}
deleteEquipe(idT: any){
  return this.http.delete('http://localhost:8081/equipe/'+idT) ;
}
updateEquipe(data: any){
  return this.http.put('http://localhost:8081/equipe/',data) ;
}
getEquipeById(idT: any){
  return this.http.get('http://localhost:8081/equipe/'+idT) ;
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
}
