import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {


  constructor() { }

  // Méthode pour récupérer les statistiques (données statiques)
  getStatistiques(): Observable<any> {
    const statistiques = {
      effectifs: [
        { filiere: 'Génie logiciel', nombre: 120 },
        { filiere: 'Sécurité Informatique', nombre: 150 },
        { filiere: 'Base de données', nombre: 80 },
        { filiere: 'Gestion de projet', nombre: 50 },
      ]
    };
    return of(statistiques); // Retourne un Observable avec les données
  }}
