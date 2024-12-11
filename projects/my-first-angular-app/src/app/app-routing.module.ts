import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Route pour la page d'accueil
  { path: 'details/:id', component: DetailsComponent }  // Route pour la page de détails avec un paramètre `id`
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], // Déclarez vos routes ici
  exports: [RouterModule]
})
export class AppRoutingModule {}
