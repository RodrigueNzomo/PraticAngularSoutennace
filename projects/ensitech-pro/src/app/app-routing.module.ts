import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { CoursComponent } from './cours/cours.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirection par défaut vers la page de connexion
  { path: 'home', component: HomeComponent },
  { path: 'enseignants', component: EnseignantsComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'responsable', component: ResponsableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'statistique', component: StatistiqueComponent },
  // En cas de route invalide, redirige vers la page de connexion
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Correct usage de RouterModule
  exports: [RouterModule]
})
export class AppRoutingModule {}
