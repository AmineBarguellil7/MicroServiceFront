import { Component, OnInit } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-liste',
  templateUrl: './afficher-liste.component.html',
  styleUrls: ['./afficher-liste.component.css']
})
export class AfficherListeComponent implements OnInit {
  constructor(private http: HttpClient , private router: Router) {}

  titre:string="";
  Id:string="";

  data: any; 

  SearchData:any;

  categories: any[] = [];



  TestStatus() {
    if (this.titre === "") {
      return false;
    }
  
    const backendUrl = 'http://localhost:9093/article/articlesByTitre';
    const params = new HttpParams().set('titre', this.titre);
  
    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.SearchData = responseData;
      
      this.router.navigate(['/afficher-liste/search'], {
        queryParams: {
          searchData: JSON.stringify(this.SearchData) 
        }
      });
    });
  
    return false;
  }


  searchByCategory() {
    const selectedCategory = (document.getElementById('categoryDropdown') as HTMLSelectElement).value; 
    if (!selectedCategory) {
      return false; 
    }
  
    
  
    const backendUrl = 'http://localhost:9093/article/articlesByCategory'; 
    const params = new HttpParams().set('category', selectedCategory);
  
    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.SearchData = responseData;
      console.log(this.SearchData);
  
      this.router.navigate(['/afficher-liste/search'], {
        queryParams: {
          searchData: JSON.stringify(this.SearchData)
        }
      });
    });
  
    return false;
  }
  
  


  SearchArticleById(id:string) {
    if (this.Id=="") {
      return true;
    }
    if (id==this.Id) {
      return true;
    }
    return false;
  }

  loadCategories() {
    this.http.get('http://localhost:9093/categorieArticle/query').subscribe((data: any) => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  ngOnInit() {  
      this.http.get('http://localhost:9093/article/query').subscribe((responseData) => {
        this.data = responseData;
        console.log(this.data);
      });
      this.loadCategories();
  }

}
