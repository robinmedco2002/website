import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
   
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
