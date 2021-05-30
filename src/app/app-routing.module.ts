import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'', redirectTo:"users", pathMatch:"full"},
  {path:'users', component:UsersComponent},
  {path:'newuser', component:NewUserComponent},
  {path: 'updateuser/:id', component: UpdateUserComponent },
  {path:'users/:id', component:UserDetailsComponent},
  {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
