import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  login() {
    // Récupérer les informations depuis le localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    const storedRole = localStorage.getItem('userRole'); // Récupération du rôle

    // Vérifier si les identifiants sont corrects
    if (this.email === storedEmail && this.password === storedPassword) {
      this.successMessage = 'Connexion réussie !';
      this.errorMessage = '';

      // Redirection en fonction du rôle
      if (storedRole === 'admin') {
        this.router.navigate(['/admin']); // Page administrateur
      } else if (storedRole === 'responsable') {
        this.router.navigate(['/responsable']); // Page responsable
      } else if (storedRole === 'enseignant') {
        this.router.navigate(['/enseignant']); // Page enseignant
      } else if (storedRole === 'etudiant') {
        this.router.navigate(['/etudiant']); // Page étudiant
      } else {
        this.errorMessage = 'Rôle inconnu.';
      }
    } else {
      this.errorMessage = 'Identifiants incorrects.';
      this.successMessage = '';
    }
  }
}
