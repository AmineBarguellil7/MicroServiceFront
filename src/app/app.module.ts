import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DepartementComponent } from './departement/departement.component';
import { ListeDepartementComponent } from './departement/liste-departement/liste-departement.component';
import { NotFoundComponent } from './departement/not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    ListeDepartementComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
