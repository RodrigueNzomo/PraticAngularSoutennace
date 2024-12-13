import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // Importation des modules nécessaires
import { NgModule } from '@angular/core'; // Importation de NgModule

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: string = 'Bienvenue sur Ensitech - Formations Odoo';
  description: string =
    "Découvrez nos formations pour maîtriser Odoo et devenir un expert dans la gestion d'entreprise.";

  // Liste des métiers et formations associées
  courses: Array<{ role: string; skills: string[] }> = [
    {
      role: 'Développeur Odoo',
      skills: [
        'Python',
        'Odoo ORM',
        'Développement de modules',
        'Vue et API Odoo',
        'Git',
      ],
    },
    {
      role: 'Consultant Fonctionnel Odoo',
      skills: [
        'Analyse des besoins',
        'Gestion de projet',
        'Module Odoo (Ventes, Achats, Comptabilité)',
        'Paramétrage Odoo',
        'Accompagnement utilisateur',
      ],
    },
    {
      role: 'Administrateur Odoo',
      skills: [
        'Installation Odoo',
        'Configuration Serveur',
        'Maintenance Odoo',
        'Sauvegarde et restauration',
        'Gestion des utilisateurs',
      ],
    },
    {
      role: 'Chef de Projet Odoo',
      skills: [
        'Gestion de projet Agile',
        'Planification',
        'Suivi d’avancement',
        'Formation équipe',
        'Tests et validation',
      ],
    },
    {
      role: 'Responsable Support Odoo',
      skills: [
        'Assistance technique',
        'Gestion des incidents',
        'Formation des utilisateurs',
        'Documentation et FAQ',
        'Support de niveau 1 à 3',
      ],
    },
    {
      role: 'Consultant Odoo eCommerce',
      skills: [
        'Paramétrage Odoo eCommerce',
        'Gestion des produits',
        'Passerelles de paiement',
        'SEO Odoo',
        'Analyse des ventes en ligne',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Vous pouvez ajouter des appels API ici pour charger des données supplémentaires si nécessaire.
  }
}

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Définir la route pour HomeComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Optionnel : rediriger vers HomeComponent par défaut
  // Ajoutez d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
