import { Component, OnInit } from '@angular/core';

interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: string;
}

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent implements OnInit {
  etudiant: Etudiant = {
    id: 0, // Initialisation avec un ID par défaut
    nom: '',
    prenom: '',
    email: '',
    dateNaissance: '',
  };

  etudiants: Etudiant[] = [
    {
      id: 1,
      nom: 'Dupont',
      prenom: 'Jean',
      email: 'jean.dupont@example.com',
      dateNaissance: '1990-05-12',
    },
    {
      id: 2,
      nom: 'Durand',
      prenom: 'Marie',
      email: 'marie.durand@example.com',
      dateNaissance: '1992-08-19',
    },
    {
      id: 3,
      nom: 'Lemoine',
      prenom: 'Pierre',
      email: 'pierre.lemoine@example.com',
      dateNaissance: '1995-11-03',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Méthode pour ajouter ou modifier un étudiant
  onSubmit(form: any): void {
    if (this.etudiant.id === 0) {
      // Ajout d'un nouvel étudiant
      const newId = this.etudiants.length + 1;
      this.etudiants.push({ ...this.etudiant, id: newId });
    } else {
      // Modification d'un étudiant existant
      const index = this.etudiants.findIndex(
        (etudiant) => etudiant.id === this.etudiant.id
      );
      if (index !== -1) {
        this.etudiants[index] = { ...this.etudiant };
      }
    }

    // Réinitialiser le formulaire
    form.resetForm();
    this.etudiant = {
      id: 0, // Réinitialisation avec un ID par défaut
      nom: '',
      prenom: '',
      email: '',
      dateNaissance: '',
    };
  }

  // Méthode pour éditer un étudiant
  editEtudiant(etudiant: Etudiant): void {
    this.etudiant = { ...etudiant };
  }

  // Méthode pour supprimer un étudiant
  deleteEtudiant(id: number): void {
    const index = this.etudiants.findIndex((etudiant) => etudiant.id === id);
    if (index !== -1) {
      this.etudiants.splice(index, 1);
    }
  }
}
