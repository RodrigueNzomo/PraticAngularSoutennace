import { Injectable } from '@angular/core';
import { JwtAuthenticationResponse } from './JwtAuthenticationResponse';
import { SigninRequest } from './SigninRequest';
import { SignUpRequest } from './SignUpRequest';
import { Voyage } from './voyage';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private voyageUrlBackendAPI = 'http://localhost:8080';  // URL to web api

  constructor( private http: HttpClient, private tokenService : TokenService) { }


  public signup(request : SignUpRequest) : Observable<JwtAuthenticationResponse> {

    return this.http.post<JwtAuthenticationResponse>(this.voyageUrlBackendAPI+"/api/auth/signup",request,this.httpOptions);
  }

  public signin(request : SigninRequest) : Observable<JwtAuthenticationResponse> {

      return this.http.post<JwtAuthenticationResponse>(this.voyageUrlBackendAPI+"/api/auth/signin", request, this.httpOptions);
  }

  public listevoyages() : Observable<Voyage[]> {

    // ajout du token dans le header de la requete
    //this.httpOptions.headers.set("Authorization","Bearer "+ this.tokenService.getData("token"));

    this.httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer '+ this.tokenService.getData("token") }, )
    };

    return this.http.get<Voyage[]>(this.voyageUrlBackendAPI+"/api/voyage/getall",this.httpOptions)
    .pipe(
      tap(_ => console.log(" liste des voyages")),
      catchError(this.handleError<Voyage[]>('listevoyages()', []))
    );
  }

  public enregistrerVoyage(voyage : Voyage): Observable<number> {

    // ajout du token dans le header de la requete
    //this.httpOptions.headers.set("Authorization","Bearer "+ this.tokenService.getData("token"));
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+ this.tokenService.getData("token") }, )
    };

    return this.http.post<number>(this.voyageUrlBackendAPI+"/api/voyage/create",voyage, this.httpOptions);
  }

  public getVoyageById( id: number) : Observable<Voyage> {
    // ajout du token dans le header de la requete
    //this.httpOptions.headers.set("Authorization","Bearer "+ this.tokenService.getData("token"));

    this.httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer '+ this.tokenService.getData("token") }, )
    };

    return this.http.get<Voyage>(this.voyageUrlBackendAPI+"/api/voyage/get/"+id, this.httpOptions);
  }

  public deleteById( nomVoyage: String) : Observable<boolean> {

    // ajout du token dans le header de la requete
    //this.httpOptions.headers.set("Authorization","Bearer "+ this.tokenService.getData("token"));
    this.httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer '+ this.tokenService.getData("token") }, )
    };

   return this.http.get<boolean>(this.voyageUrlBackendAPI+"/api/voyage/delete/"+ nomVoyage, this.httpOptions);
  }



  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


}
