import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  constructor(private usrService: UsersService, private router: Router, private location: Location) { }

  ngOnInit(): void {
  }
  @Input() user: any;

  deleteUser(id: any){
    this.usrService.deleteUserById(id).subscribe();
    this.location.replaceState(" ");
    
  }

}