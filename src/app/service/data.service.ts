import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../models/Departement';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getdepartementUrl="http://localhost:9091/departement";
  public AjoutdepartementUrl='http://localhost:9091/departement/add';
  public UpdatedepartementUrl="http://localhost:9091/departement/update";
  public DeletedepartementUrl="http://localhost:9091/departement/delete/";
  public getdepartementByIdUrl="http://localhost:9091/departement/read_T/"
  constructor(private http:HttpClient) { }



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
