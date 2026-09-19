import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../services/user';

@Component({
  imports: [],
  selector: 'app-user-details',
  styleUrl: './user-details.css',
  templateUrl: './user-details.html',
})
export class UserDetails implements OnInit{
  user: any

  constructor(
    private route: ActivatedRoute,
    private userService : User
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.userService.getUserId(id).subscribe({
      next: (data) => {this.user = data},
      error: (error) => {console.log('Error: ',error)}
    })

    console.log(id)
  }
}
