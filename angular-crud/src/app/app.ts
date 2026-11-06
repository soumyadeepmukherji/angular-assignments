import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table } from './components/table/table';
import { Form } from './components/form/form';

@Component({
  imports: [Table, Form],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-crud');
}
