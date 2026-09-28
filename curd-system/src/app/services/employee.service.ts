import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class EmployeeService {
    private baseLink = 'http://localhost:3000/employees'

    constructor(private http: HttpClient){}

    getUser(): Observable<any[]>{
        return this.http.get<any[]>(this.baseLink)
    }

    getUserId(id: number): Observable<any[]>{
        return this.http.get<any>(`${this.baseLink}/${id}`)
    }
}
