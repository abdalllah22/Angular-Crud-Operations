import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private myServiecs: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  
  id: any;
  name: any;
  phone: any;
  email: any;
  

  Add(){
    let user = {
      id:this.id,
      name:this.name,
      phone:this.phone,
      email:this.email
    }
    this.myServiecs.addNewUser(user).subscribe();
    this.router.navigateByUrl('users');
  }
  

  
  

}
