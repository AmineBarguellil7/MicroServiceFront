import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-afficher-liste',
  templateUrl: './afficher-liste.component.html',
  styleUrls: ['./afficher-liste.component.css']
})
export class AfficherListeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  data: any; 

  sendRequest() {
    this.http.get('http://localhost:9093/article/query').subscribe((responseData) => {
      this.data = responseData;
    });
  }

  ngOnInit() {  
  }

}
