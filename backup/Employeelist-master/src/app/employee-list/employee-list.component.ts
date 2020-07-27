import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
   <h2> Employee Details List </h2>

   <h3 style="color:red;font-size:20px"> {{ errorMsg}}  </h3>;

   <ul style="list-style: none;" *ngFor="let employee of employees">
      
      
   
      <li style="color:blue;font-size:20px"> <strong>  <a style="color:red;">   Employe Id    : </a> 
       {{employee.id}}  </strong>
       </li>
      
      <li style="color:blue; font-size:20px"> <strong>  <a style="color:red;">   Employe userId: </a>  </strong> {{employee.userId}} </li>
      <li style="color:blue; font-size:20px"> <strong>  <a style="color:red;">   Employe Title : </a>  </strong>{{employee.title}} </li>
      <li style="color:blue; font-size:20px"> <strong>  <a style="color:red;">   Employe Body  : </a>  </strong> {{employee.body}} </li>


      </ul>
   `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg;
  
  

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit()  {
  this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
                
}

}
