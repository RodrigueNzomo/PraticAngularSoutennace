import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  newCours: string = '';
  coursList: { id: number, name: string }[] = [];

  // Pour gérer l'édition
  editingCoursId: number | null = null;
  editingCoursName: string = '';

  constructor() { }

  ngOnInit(): void {
    // Charger les cours depuis le localStorage
    this.loadCours();
  }

  // Fonction pour charger les cours depuis le localStorage
  loadCours() {
    const storedCours = localStorage.getItem('coursList');
    if (storedCours) {
      this.coursList = JSON.parse(storedCours);
      console.log(this.coursList); // Pour vérifier que les données sont correctement récupérées
    }
  }

  // Ajouter un cours
  addCours() {
    if (this.newCours.trim()) {
      const newCoursObj = {
        id: Date.now(),  // Utilisation de Date.now() pour générer un ID unique
        name: this.newCours
      };
      this.coursList.push(newCoursObj);
      localStorage.setItem('coursList', JSON.stringify(this.coursList));
      this.newCours = ''; // Réinitialiser le champ de saisie
    }
  }

  // Modifier un cours
  editCours(id: number) {
    const cours = this.coursList.find(c => c.id === id);
    if (cours) {
      this.editingCoursId = id;
      this.editingCoursName = cours.name;
    }
  }

  // Sauvegarder un cours modifié
  saveCours() {
    if (this.editingCoursId !== null && this.editingCoursName.trim()) {
      const cours = this.coursList.find(c => c.id === this.editingCoursId);
      if (cours) {
        cours.name = this.editingCoursName;
        localStorage.setItem('coursList', JSON.stringify(this.coursList));
      }
      this.cancelEdit();  // Revenir à l'état initial
    }
  }

  // Annuler l'édition
  cancelEdit() {
    this.editingCoursId = null;
    this.editingCoursName = '';
  }

  // Supprimer un cours
  deleteCours(id: number) {
    this.coursList = this.coursList.filter(cours => cours.id !== id);
    localStorage.setItem('coursList', JSON.stringify(this.coursList));
  }
}
