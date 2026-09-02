import { Component, signal } from '@angular/core';
import { EmployeeDirectory } from './components/employee-directory/employee-directory';

@Component({
  imports: [EmployeeDirectory],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pipe-app');
}
