import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { EmployeeService } from './employee-list/employee.service';
import { HttpClientModule } from '@angular/common/http'; 

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { ContactComponent } from './shared/contact/contact.component';
import { HomeComponent } from './shared/home/home.component';

import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
    FooterComponent,
    NavComponent,
    routingComponents,
    ContactComponent,
    HomeComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
   
   
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }