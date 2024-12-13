import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CoursComponent } from './cours/cours.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { StatistiqueComponent } from './statistique/statistique.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EtudiantComponent,
    CoursComponent,
    EnseignantsComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ResponsableComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Correct import
  bootstrap: [AppComponent]
})
export class AppModule {}
