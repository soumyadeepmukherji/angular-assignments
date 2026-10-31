import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Higlight } from './directive/higlight';
import { CommonModule } from '@angular/common';

interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
  isActive: boolean;
}

@Component({
  imports: [FormsModule,Higlight,CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  selectedDepartment = ''

  searchTerm = ''

  sortDirection: 'asc' | 'dec' = 'asc'

  employees = [
    { id: 1, name: 'Rahul', department: 'IT', salary: 50000, isActive: true  },
    { id: 2, name: 'Priya', department: 'HR', salary: 40000, isActive: false  },
    { id: 3, name: 'Amit', department: 'IT', salary: 60000, isActive: true  },
    { id: 4, name: 'Sneha', department: 'Finance', salary: 45000, isActive: true  },
    { id: 5, name: 'Karan', department: 'HR', salary: 35000, isActive: false  }
  ];

  filterdata = [...this.employees]

  // Filter the data based on Department
  filterEmployee(){
    console.log(this.selectedDepartment)
    if(!this.selectedDepartment){
      return this.employees
    }
    return this.filterdata = this.employees.filter(emp =>{
      return emp.department === this.selectedDepartment
    })
  }

  // Serach based on names
  onSearch(){
    console.log(this.searchTerm)
    if(!this.searchTerm){
      return this.filterdata = [...this.employees]
    }
    return this.filterdata = this.employees.filter(emp => {
      return emp.name.toLowerCase() === this.searchTerm.toLowerCase()
    })
  }

  // Sort by ID
  sortID(){
    console.log(this.sortDirection)
    this.filterdata = this.employees.sort((a,b) => {
      return this.sortDirection === 'asc' ? a.id - b.id : b.id - a.id
    })
  }

}
