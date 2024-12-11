// import { Injectable } from '@angular/core';
// import { HousingLocation } from './housinglocation';  // Import correct du type HousingLocation

// @Injectable({
//   providedIn: 'root'
// })
// export class HousingService {
//   readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
//   url = 'http://localhost:3000/locations';  // URL de l'API à partir de laquelle on récupère les données

//   // Méthode pour récupérer toutes les locations de logements
//   async getAllHousingLocations(): Promise<HousingLocation[]> {
//     const data = await fetch(this.url);
//     return await data.json() ?? [];
//   }

//   // Méthode pour récupérer une location de logement par son ID
//   async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
//     const data = await fetch(`${this.url}/${id}`);
//     return await data.json() ?? {};
//   }

//   // Méthode pour envoyer une application de logement (exemple)
//   submitApplication(firstName: string, lastName: string, email: string) {
//     console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
//   }
// }
import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
