import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from '../models/Avis';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getavisUrl="http://localhost:8081/avis/all";
  public AjoutavisUrl='http://localhost:8081/avis/add';
  public UpdateavisUrl=" http://localhost:8081/avis/update";
  public DeleteavisUrl="http://localhost:8081/avis/delete";
  public getavisByIdUrl="http://localhost:8081/avis/get"

  constructor(private http:HttpClient) { }






addAvis(avis:Avis):Observable<Object> {
return this.http.post<Object>(this.AjoutavisUrl,avis);
}

getListAvis() {
  return this.http.get(this.getavisUrl);
}

UpdateAvis(avis){
return this.http.put(this.UpdateavisUrl,avis);
}

deleteAvis(idAvis:any){
  return this.http.delete(this.DeleteavisUrl+idAvis);
}
getAvisById(idAvis:any) {
  return this.http.get(this.getavisByIdUrl+idAvis);
}


}
