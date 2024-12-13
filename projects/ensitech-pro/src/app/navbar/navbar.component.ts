import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  // Fonction pour gérer la redirection
  navigateTo(role: string) {
    if (role === 'etudiant') {
      this.router.navigate(['/etudiant']);
    } else if (role === 'enseignant') {
      this.router.navigate(['/enseignant']);
    } else if (role === 'responsable') {
      this.router.navigate(['/responsable']);
    }
  }
}
