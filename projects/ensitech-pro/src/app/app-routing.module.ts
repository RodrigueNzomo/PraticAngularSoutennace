import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importation des composants
import { HomeComponent } from './home/home.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { CoursComponent } from './cours/cours.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

import { ForbiddenComponent } from './forbidden.component'; // Assurez-vous d'avoir créé ce composant

// AuthGuard pour la protection des routes
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // Route par défaut redirigeant vers la page "À propos"
  { path: '', redirectTo: '/about', pathMatch: 'full' },

  // Routes accessibles uniquement après authentification
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['etudiant', 'enseignant', 'responsable', 'administrateur'],
    },
  },
  {
    path: 'enseignants',
    component: EnseignantsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['enseignant', 'administrateur'] },
  },
  {
    path: 'cours',
    component: CoursComponent,
    canActivate: [AuthGuard],
    data: { roles: ['etudiant', 'enseignant', 'administrateur'] },
  },
  {
    path: 'etudiant',
    component: EtudiantComponent,
    canActivate: [AuthGuard],
    data: { roles: ['etudiant', 'administrateur'] },
  },
  {
    path: 'responsable',
    component: ResponsableComponent,
    canActivate: [AuthGuard],
    data: { roles: ['responsable', 'administrateur'] },
  },
  // {
  //   path: 'statistique',
  //   component: StatistiquesComponent,
  //   canActivate: [AuthGuard],
  //   data: { roles: ['administrateur'] },
  // },

  // Routes publiques (pas de garde)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },

  // Route pour utilisateurs non autorisés
  { path: 'forbidden', component: ForbiddenComponent },

  // Gestion des pages non trouvées (redirection vers "À propos")
  { path: '**', redirectTo: '/about' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Enregistrement des routes dans l'application
  exports: [RouterModule], // Permet aux autres modules d'utiliser le RouterModule
})
export class AppRoutingModule {}
