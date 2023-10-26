import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';
import { Equipe } from '../models/equipe'; 
import { Universite } from '../models/Universite';
import { Contrat } from '../models/contrat';
import { Etudiant } from '../models/Etudiant';
import { Store } from '../models/store';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getarticleUrl="http://localhost:8082/article";
  public AjoutarticleUrl='http://localhost:8082/article/addArticle';
  public UpdatearticleUrl="http://localhost:8082/article/updateArticle";
  public DeletearticleUrl="http://localhost:8082/article/";
  public getarticleByIdUrl="http://localhost:8082/article/"

  
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


addStore(store?: Store): Observable<Object>{
  return this.http.post<Object>('http://localhost:8084/store',store) ;
}
getStores (){
  return this.http.get('http://localhost:8084/store') ;
}
deleteStore(idT: any){
  return this.http.delete('http://localhost:8084/store/'+idT) ;
}
updateStore(data: any){
  return this.http.put('http://localhost:8084/store/updatestore',data) ;
}
getStoreById(idT: any){
  return this.http.get('http://localhost:8084/store/'+idT) ;
}




addArticle(article:Article):Observable<Object> {
return this.http.post<Object>(this.AjoutarticleUrl,article);
}

getListArc() {
  return this.http.get(this.getarticleUrl);
}

UpdateArticle(article){
return this.http.put(this.UpdatearticleUrl,article);
}

deleteArticle(idArc:any){
  return this.http.delete(this.DeletearticleUrl+idArc);
}
getArticleById(idArc:any) {
  return this.http.get(this.getarticleByIdUrl+idArc);
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
  addEtudiant(etudiant:Etudiant){
    console.log("Test Service");
   return  this.http.post<Object>('http://localhost:8082/etudiant/',etudiant);
  
  }public GetAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>('http://localhost:8082/etudiant/');
  }
  deleteEtudiant(etudiant:Etudiant):Observable<Etudiant>{
    console.log("delete etudiant");
    return this.http.delete<Etudiant>( 'http://localhost:8082/etudiant/'+etudiant.id) }
  updateEtudiant(etudiant:Etudiant):Observable<Etudiant>{
  
      return this.http.put<Etudiant>('http://localhost:8082/etudiant/',etudiant);
      console.log("update etudiant")
    }
    getEtudiant(id:number):Observable<Etudiant>{
  
      return this.http.get<Etudiant>('http://localhost:8082/etudiant/'+id);
      console.log("get etudiant");
    }
    getOrders(): Observable<Order[]> {
      // Adjust the URL as per your API
 
     // Send a GET request to the server to fetch orders
     return this.http.get<Order[]>(`http://localhost:8083/order`);
     
   }
   addOrder(order: Order): Observable<any> {
     return this.http.post(`http://localhost:8083/order/addOrder`, order);
   }
   deleteOrder(order: Order): Observable<any> {
    const url = `http://localhost:8083/order/${order.id}`; // Adjust the URL structure as per your API
    // Assuming you have an `id` property in your Order model

    // Send a DELETE request to remove the order
    return this.http.delete(url);
  }
}
