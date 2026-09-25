import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList implements OnInit{
  users: any = []

  constructor(private userService : User){}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (data) => {
        console.log('API DATA:', data);
        this.users = data
        console.log('USER LIST:', this.users);
      },
      error: (error) => {
        console.log('Error: ', error)
      }
    })
  }
}
