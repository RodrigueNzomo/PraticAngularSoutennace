import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listuser :any[]=[]
  constructor(private  http : HttpClient) { }
  ngOnInit(){this.getuser();}
  getuser(){
    let data = this.http.get<any>("https://jsonplaceholder.typicode.com/users")
    return data;
  
}
}