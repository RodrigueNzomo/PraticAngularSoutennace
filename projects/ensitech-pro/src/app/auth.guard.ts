import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userRole = localStorage.getItem('userRole');

    // Vérifiez le rôle de l'utilisateur et accédez aux pages selon les règles définies
    if (userRole) {
      const allowedRoles = route.data['roles'] as Array<string>;
      if (allowedRoles.includes(userRole)) {
        return true;
      } else {
        this.router.navigate(['/forbidden']); // Page d'accès refusé
        return false;
      }
    }

    // Si l'utilisateur n'est pas authentifié, redirection vers la page de connexion
    this.router.navigate(['/login']);
    return false;
  }
}
