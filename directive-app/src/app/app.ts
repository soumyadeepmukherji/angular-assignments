import { Component, signal } from '@angular/core';
import { EmployeeStatus } from './components/employee-status/employee-status';
import { ColourPalette } from './components/colour-palette/colour-palette';

@Component({
  imports: [EmployeeStatus,ColourPalette,],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('directive-app');
}
