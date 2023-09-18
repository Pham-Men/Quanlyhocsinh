import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InforComponent } from './infor/infor.component';
import { LoginComponent } from './login/login.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'infor', component: InforComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addStudent', component: AddStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
