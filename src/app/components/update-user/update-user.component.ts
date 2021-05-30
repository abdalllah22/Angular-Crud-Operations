import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UsersService, private router: Router) { }
  id: any;
  name: any;
  phone: any;
  email: any;
  userUP:any 

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService.getUserById(this.id).subscribe(
      (res)=>{this.userUP = res;},
      (err)=>{console.log(err)},
    );
  }
  Update(){
    
    this.userService.updateUserById(this.id, this.userUP).subscribe();
    this.router.navigateByUrl('users');
  }

}
