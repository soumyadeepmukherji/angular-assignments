import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { NgbDropdown, NgbDropdownButtonItem, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { ApiServices, Product } from '../../services/api.services';

@Component({
  imports: [MatCardModule,NgbDropdown,NgbDropdownToggle,MatFormFieldModule,MatInputModule,MatTimepickerModule,MatDatepickerModule,FormsModule,ReactiveFormsModule],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form implements OnInit{
  constructor(private cdr: ChangeDetectorRef){}
  private fb = inject(FormBuilder)
  private api = inject(ApiServices)
  ProductForm: any

  isEditing = false
  editingId = null

  ngOnInit(): void {
    this.ProductForm = this.fb.group({
      product:['',Validators.required],
      category:['',Validators.required],
      raised:['',Validators.required],
      date:['',Validators.required],
      status:['',Validators.required]
    })

    this.api.editData$.subscribe({ next: (row) => {
      if(row){
        this.isEditing = true
        this.editingId = row.id

        this.ProductForm.setValue({
          product: row.product,
          category: row.category,
          raised: row.raised,
          date: row.date,
          status: row.status
        })
      }
    },
    error: (err) => {
      console.error(err)
    }
    })
  }


  onSubmit(){
    if(this.ProductForm.invalid){
      this.ProductForm.markAllAsTouched();
      return;
    }
    else{

      const updatedValue = this.ProductForm.value

      if(this.isEditing){
        this.api.editData(updatedValue,this.editingId)
        console.log('updated')
        this.isEditing = false
        this.editingId = null
        this.ProductForm.reset()
      }
      else{

      const payload = {
        id: crypto.randomUUID(),
        product: this.ProductForm.get('product')?.value,
        category: this.ProductForm.get('category')?.value,
        raised: this.ProductForm.get('raised')?.value,
        date: this.ProductForm.get('date')?.value,
        status: this.ProductForm.get('status')?.value,
      }
      this.api.saveData(payload)
      this.ProductForm.reset()
      }
    }
    
  }

}
