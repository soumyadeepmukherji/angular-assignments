import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  imports: [],
  selector: 'app-employee-list',
  styleUrl: './employee-list.css',
  templateUrl: './employee-list.html',
})
export class EmployeeList implements OnInit {

  employeeList: any = []

  constructor(private service: EmployeeService){}

  ngOnInit(): void {
    this.service.getUser().subscribe({
      next: (data) => {
        this.employeeList = data
        console.log(this.employeeList)
      }
    })
    
  }
}
