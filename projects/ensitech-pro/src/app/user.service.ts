// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   listuser :any[]=[]
//   constructor(private  http : HttpClient) { }
//   ngOnInit(){this.getuser();}
//   getuser(){
//     let data = this.http.get<any>("https://jsonplaceholder.typicode.com/users")
//     return data;

// }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  listuser: any[] = []; // Liste des utilisateurs

  constructor(private http: HttpClient) {}

  // Récupérer les utilisateurs
  getuser(): Observable<any[]> {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError((error) => {
          console.error(
            'Erreur lors de la récupération des utilisateurs:',
            error
          );
          throw error;
        })
      );
  }

  // Méthode pour initialiser et charger les utilisateurs
  loadUsers(): void {
    this.getuser().subscribe(
      (data) => {
        this.listuser = data; // Assignation des utilisateurs récupérés à listuser
        console.log(this.listuser); // Optionnel : Affichage dans la console
      },
      (error) => {
        // Gestion d'erreurs si l'API échoue
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }
}
