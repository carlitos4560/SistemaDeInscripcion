import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FootherComponent } from './components/foother/foother.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './login/login.component';
// import { MaterialModule } from './material';
const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'proyects', component: ProyectComponent },
  { path: 'teachers', component: TeacherComponent },
  { path: 'footer', component: FootherComponent },
  { path: 'forms', component: FormComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
