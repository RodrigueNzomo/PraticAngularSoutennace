import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Gestion des routes de l'application
import { HttpClientModule } from '@angular/common/http'; // Communication avec les APIs
import { FormsModule } from '@angular/forms'; // Manipulation des formulaires
import { CommonModule } from '@angular/common'; // Directives et pipes Angular de base

// Importation des composants de l'application
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CoursComponent } from './cours/cours.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent, // Composant racine de l'application
    HomeComponent, // Composant de la page d'accueil
    EtudiantComponent, // Composant de gestion des étudiants
    CoursComponent, // Composant de gestion des cours
    EnseignantsComponent, // Composant de gestion des enseignants
    NavbarComponent, // Barre de navigation
    FooterComponent, // Pied de page
    SidebarComponent, // Barre latérale
    ResponsableComponent, // Composant de gestion des responsables
    LoginComponent, // Composant de la page de connexion
    RegisterComponent, // Composant de la page d'inscription
    AboutComponent, // Page "À propos"
  ],
  imports: [
    BrowserModule, // Module de base pour les applications Angular
    AppRoutingModule, // Gestion des routes définies
    HttpClientModule, // Module HTTP pour consommer des APIs
    FormsModule, // Manipulation et gestion des formulaires
    CommonModule, // Fonctionnalités Angular communes
  ],
  providers: [], // Services globaux de l'application (à ajouter si nécessaire)
  bootstrap: [AppComponent], // Composant à charger au démarrage
})
export class AppModule {}
