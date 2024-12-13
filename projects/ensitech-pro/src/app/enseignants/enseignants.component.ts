import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  // Propriétés pour les entrées du formulaire
  nom: string = '';
  prenom: string = '';
  email: string = '';
  specialite: string = '';
  telephone: string = '';
  adresse: string = '';
  enseignantsList: any[] = [];

  // Indicateur de modification d'un enseignant
  editEnseignantIndex: number | null = null;

  constructor() {
    this.loadEnseignants();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Charger les enseignants depuis localStorage
  loadEnseignants() {
    const storedEnseignants = localStorage.getItem('enseignantsList');
    if (storedEnseignants) {
      this.enseignantsList = JSON.parse(storedEnseignants);
    }
  }

  // Ajouter ou mettre à jour un enseignant
  ajouterOuModifierEnseignant() {
    if (this.nom && this.prenom && this.email && this.specialite && this.telephone) {
      const newEnseignant = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        specialite: this.specialite,
        telephone: this.telephone,
        adresse: this.adresse
      };

      if (this.editEnseignantIndex !== null) {
        // Mise à jour de l'enseignant existant
        this.enseignantsList[this.editEnseignantIndex] = newEnseignant;
        this.editEnseignantIndex = null; // Réinitialiser l'index
      } else {
        // Ajout d'un nouvel enseignant
        this.enseignantsList.push(newEnseignant);
      }

      // Sauvegarder la liste dans le localStorage
      localStorage.setItem('enseignantsList', JSON.stringify(this.enseignantsList));

      // Réinitialiser le formulaire après ajout/édition
      this.resetForm();
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  // Éditer un enseignant
  editEnseignant(index: number) {
    const enseignant = this.enseignantsList[index];
    this.nom = enseignant.nom;
    this.prenom = enseignant.prenom;
    this.email = enseignant.email;
    this.specialite = enseignant.specialite;
    this.telephone = enseignant.telephone;
    this.adresse = enseignant.adresse;
    this.editEnseignantIndex = index;
  }

  // Supprimer un enseignant
  supprimerEnseignant(index: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enseignant ?')) {
      this.enseignantsList.splice(index, 1);
      localStorage.setItem('enseignantsList', JSON.stringify(this.enseignantsList));
    }
  }

  // Réinitialiser le formulaire
  resetForm() {
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.specialite = '';
    this.telephone = '';
    this.adresse = '';
  }
}