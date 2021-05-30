import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myclient:HttpClient) { }

  baseUrl = "http://localhost:3000/users"
  
  getAllUsers(){
    return this.myclient.get(this.baseUrl);
  }
  getUserById(id: any){
    return this.myclient.get(this.baseUrl+'/'+id);
  }
  addNewUser(user: any){
    return this.myclient.post(this.baseUrl,user);
  }
  deleteUserById(id: any){
    return this.myclient.delete(this.baseUrl+'/'+id);
  }
  updateUserById(id:any,user:any){
    return this.myclient.put(this.baseUrl+'/'+id,user);
  }

}
