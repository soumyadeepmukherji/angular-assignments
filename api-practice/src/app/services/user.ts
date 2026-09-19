import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn : 'root'})
export class User {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users'

    constructor(private http : HttpClient){}

    getUser(): Observable<any[]>{
        return this.http.get<any[]>(this.apiUrl)
    }

    getUserId(id: number): Observable<any[]>{
        return this.http.get<any>(`${this.apiUrl}/${id}`)
    }
}
