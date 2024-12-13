import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoginPage: boolean = false;
  isRegisterPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Vérifie l'URL initiale au démarrage
    const currentUrl = this.router.url;
    this.isLoginPage = currentUrl === '/login';
    this.isRegisterPage = currentUrl === '/register';

    // Abonnement aux événements de navigation
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        const newUrl = event.urlAfterRedirects;
        this.isLoginPage = newUrl === '/login';
        this.isRegisterPage = newUrl === '/register';
      });
  }
}
