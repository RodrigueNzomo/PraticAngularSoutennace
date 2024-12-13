import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoginPage: boolean = false;
  isRegisterPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Vérifie la route active et définie les variables `isLoginPage` et `isRegisterPage`
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      this.isLoginPage = currentUrl === '/login';  // Vérifie si la route active est '/login'
      this.isRegisterPage = currentUrl === '/register';  // Vérifie si la route active est '/register'
    });
  }
}
