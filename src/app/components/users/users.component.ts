import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UsersService, private router: Router) { }
  
  users:any;

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (res)=>{ this.users = res},
      (err)=>{ console.log(err)}
    );
  }

  goToAddUser() {
    this.router.navigateByUrl('newuser');
  }

   viewUser(id: any) {
    this.router.navigateByUrl(`users/${id}`);
  }

  updateUser(id:any){
    this.router.navigateByUrl(`updateuser/${id}`);
  }
  deleteUser(id:any){
    this.userService.deleteUserById(id).subscribe(
      ()=>{ this.ngOnInit() },
      ()=>{}
    );
    this.router.navigateByUrl('users');

  }

}
