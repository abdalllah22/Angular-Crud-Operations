import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: any;
  user: any;
  constructor(myActivated:ActivatedRoute, private myService:UsersService, private router: Router) {
    this.id = myActivated.snapshot.params.id;
  }

  ngOnInit(): void {
    this.myService.getUserById(this.id).subscribe(
      (res)=>{this.user = res},
      (err)=>{console.log(err)},
    );
  }

}
