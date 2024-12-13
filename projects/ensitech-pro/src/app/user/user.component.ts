import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  listuser :any[]=[]
  constructor(private userService:UserService) { }
  ngOnInit(){this.getuser();}
  getuser(){
   this.userService.getuser().subscribe(
    result =>{
      this.listuser= result;
      console.log(result)
    }
   )
  }
}
