import { Component } from '@angular/core';
import { StudentProfile } from './student-profile/student-profile';

@Component({
  imports: [StudentProfile],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App{
  showProfile = true;

  removeProfile(): void {
    this.showProfile = false;
  }

  showStudentProfile(): void {
    this.showProfile = true;
  }
}
