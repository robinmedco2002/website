import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './shared/home/home.component';
import { ContactComponent } from './shared/contact/contact.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component:AboutComponent},
  { path: 'employee-list', component:EmployeeListComponent},
  { path: 'home', component:HomeComponent},
  { path: 'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[AboutComponent, EmployeeListComponent]
