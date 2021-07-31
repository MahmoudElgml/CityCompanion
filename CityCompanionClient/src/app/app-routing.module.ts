import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './pages/home/explore/explore.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { MeComponent } from './pages/user/me/me.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'user', children:[
    {path:'login',component:LoginComponent,pathMatch:'full'},
    {path:'register',component:RegisterComponent,pathMatch:'full'},
    {path:'me',component:MeComponent,pathMatch:'full'}
  ]},
  {path:'explore',component:ExploreComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
