import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillcountPipePipe } from '../../pipes/skillcount-pipe-pipe';

@Component({
  imports: [CommonModule,SkillcountPipePipe],
  selector: 'app-employee-directory',
  styleUrl: './employee-directory.css',
  templateUrl: './employee-directory.html',
})
export class EmployeeDirectory {
  employees = [
  {
    name: 'rahul sharma',
    department: 'frontend development',
    salary: 75000,
    joiningDate: new Date('2024-06-10'),
    skills: ['Angular', 'TypeScript', 'JavaScript'],
    status: 'active'
  },
  {
    name: 'priya patil',
    department: 'backend development',
    salary: 85000,
    joiningDate: new Date('2023-03-15'),
    skills: ['Node.js', 'Express', 'MongoDB'],
    status: 'inactive'
  },
  {
    name: 'amit joshi',
    department: 'ui ux design',
    salary: 65000,
    joiningDate: new Date('2025-01-20'),
    skills: ['Figma', 'UI Design'],
    status: 'active'
  }
];
}
