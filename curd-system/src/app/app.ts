import { Component, signal } from '@angular/core';
import { EmployeeList } from './components/employee-list/employee-list';

@Component({
  imports: [EmployeeList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
