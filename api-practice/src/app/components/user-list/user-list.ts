import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
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
        this.users = data
      },
      error: (error) => {
        console.log('Error: ', error)
      }
    })
  }
}
