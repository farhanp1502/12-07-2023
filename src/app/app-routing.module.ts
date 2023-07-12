import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path: '', redirectTo:'Home' , pathMatch:'full'},
  {path:'Home',component:DashboardComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
