import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = 'user'; // Définir un rôle par défaut
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  register(): void {
    // Vérifier si les mots de passe correspondent
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    // Sauvegarder les informations de l'utilisateur
    this.signup(this.email, this.password, this.role);

    // Message de succès et réinitialisation de l'erreur
    this.successMessage = 'Inscription réussie !';
    this.errorMessage = '';

    // Redirection vers la page de connexion après un délai
    this.redirectToLogin();
  }

  // Fonction pour enregistrer l'utilisateur dans le localStorage avec son rôle
  private signup(email: string, password: string, role: string): void {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userRole', role); // Sauvegarde du rôle dans le localStorage
  }

  // Fonction pour rediriger vers la page de connexion après un délai
  private redirectToLogin(): void {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000); // Délai de 2 secondes avant la redirection
  }
}
