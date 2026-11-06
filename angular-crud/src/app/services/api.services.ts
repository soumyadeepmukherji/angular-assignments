import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

export interface Product{
    id: string,
    product: string,
    category: string,
    raised: string,
    date: string,
    status: string
}

@Injectable({providedIn: 'root'})
export class ApiServices{

    private http = inject(HttpClient)

    BASE_API = 'http://localhost:3000/products'

    private editDataSubject = new Subject<any>()
    editData$ = this.editDataSubject.asObservable()

    private productSubject = new BehaviorSubject<any[]>([])
    product$ = this.productSubject.asObservable()

    sendDataToForm(rowData: any){
        this.editDataSubject.next(rowData)
        console.log(this.editData$)
    }

    refreshData(){
        this.http.get<any[]>(this.BASE_API).subscribe(data => this.productSubject.next(data))
    }

    getData(){
        return this.http.get<Product[]>(this.BASE_API)
       
    }

    saveData(payload: any){
        console.log('save data')
        return this.http.post(this.BASE_API,payload).subscribe(() => {this.refreshData()})
    }

    deleteData(id: any){
        return this.http.delete(`${this.BASE_API}/${id}`).subscribe(() => {this.refreshData()})
    }

    editData(payload: any,id: any){
        return this.http.patch(`${this.BASE_API}/${id}`,payload).subscribe(() => {this.refreshData()})
    }
}