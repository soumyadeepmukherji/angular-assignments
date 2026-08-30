import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-employee-status',
  styleUrl: './employee-status.css',
  templateUrl: './employee-status.html',
})
export class EmployeeStatus {
employees = [
  {
  id: 101,
  name: 'Rahul',
  department: 'IT',
  status: 'Active'
  },
  {
  id: 102,
  name: 'Priya',
  department: 'HR',
  status: 'De-active'
  },
  {
  id: 103,
  name: 'Amit',
  department: 'Finance',
  status: 'Active'
  }
];
}
