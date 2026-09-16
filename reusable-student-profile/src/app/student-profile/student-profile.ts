import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-student-profile',
  styleUrl: './student-profile.css',
  templateUrl: './student-profile.html',
})
export class StudentProfile implements OnInit,DoCheck,AfterViewInit,OnDestroy{

  isLoggedIn = true;

  student = {
    name: 'Soumyadeep',
    age: 25,
    course: 'Angular'
  };

  @ViewChild('studentName')
  studentName!: ElementRef;

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');

    console.log(this.studentName.nativeElement);

    this.studentName.nativeElement.style.textTransform = 'uppercase';
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
