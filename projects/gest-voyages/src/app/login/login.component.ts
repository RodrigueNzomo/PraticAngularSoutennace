import { Component } from '@angular/core';
import { SigninRequest } from '../SigninRequest';
import { TravelService } from '../travel.service';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  request : SigninRequest = {
    email: '',
    password: ''
  };

  constructor( private travelService: TravelService, private tokenService : TokenService, private router: Router) { }

  signin(request : SigninRequest): void {

    this.request = request;

    console.log(this.request);

    //

    this.travelService.signin(this.request).subscribe(jwtAuthenticationResponse => {
      //sauvegarde du token dans le local storage apres authentification
      this.tokenService.saveData("token",jwtAuthenticationResponse.token);

      this.router.navigate(['/voyages']);

    });

   

  }

}
