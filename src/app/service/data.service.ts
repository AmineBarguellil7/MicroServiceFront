import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../models/Departement';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //public baseurl = 'http://localhost:8081/equipe';
  public getdepartementUrl="http://localhost:9091/departement";
  public AjoutdepartementUrl='http://localhost:9091/departement/add';
  public UpdatedepartementUrl="http://localhost:9091/departement/update";
  public DeletedepartementUrl="http://localhost:9091/departement/delete/";
  constructor(private http:HttpClient) { }

  /*addEquipe(data:any){
  return this.http.post(this.baseurl, data) ;
}*/

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
}
