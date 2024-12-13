import { Component } from '@angular/core';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent {
  responsablesList: any[] = []; // Liste des responsables
  nom: string = '';
  email: string = '';
  fonction: string = '';
  telephone: string = '';
  editResponsableIndex: number | null = null; // Pour modification

  constructor() {
    // Charger les données depuis localStorage au démarrage
    const storedResponsables = localStorage.getItem('responsables');
    if (storedResponsables) {
      this.responsablesList = JSON.parse(storedResponsables);
    }
  }

  // Ajouter ou modifier un responsable
  ajouterOuModifierResponsable() {
    const responsable = {
      nom: this.nom,
      email: this.email,
      fonction: this.fonction,
      telephone: this.telephone
    };

    if (this.editResponsableIndex === null) {
      // Ajouter un nouveau responsable
      this.responsablesList.push(responsable);
    } else {
      // Modifier un responsable existant
      this.responsablesList[this.editResponsableIndex] = responsable;
      this.editResponsableIndex = null; // Réinitialiser
    }

    // Sauvegarder dans localStorage
    localStorage.setItem('responsables', JSON.stringify(this.responsablesList));

    // Réinitialiser le formulaire
    this.nom = '';
    this.email = '';
    this.fonction = '';
    this.telephone = '';
  }

  // Remplir le formulaire pour modification
  editResponsable(index: number) {
    const responsable = this.responsablesList[index];
    this.nom = responsable.nom;
    this.email = responsable.email;
    this.fonction = responsable.fonction;
    this.telephone = responsable.telephone;
    this.editResponsableIndex = index;
  }

  // Supprimer un responsable
  supprimerResponsable(index: number) {
    this.responsablesList.splice(index, 1);

    // Mettre à jour localStorage
    localStorage.setItem('responsables', JSON.stringify(this.responsablesList));
  }
}
