import { ChangeDetectorRef, Component, inject, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { ApiServices, Product } from '../../services/api.services';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  imports: [CommonModule,MatTableModule,MatPaginatorModule],
  selector: 'app-table',
  styleUrl: './table.css',
  templateUrl: './table.html',
})
export class Table implements OnInit{

  constructor(private cdr: ChangeDetectorRef){}

  private api = inject(ApiServices)

  displayedColumns: string[] = ['id', 'product', 'category', 'raised', 'date', 'status', 'actions'];

  dataSource = new MatTableDataSource<any>([]);

  tableData = this.api.getData()

  selectedRow: any = null

  ngOnInit(): void {
    this.api.refreshData()
    this.api.product$.subscribe(products => this.dataSource.data = products)
    console.log(this.tableData)
  }

  editRow(row: any){
    this.api.sendDataToForm(row)
  }

  deletRow(id: any){
    console.log(id)
    this.api.deleteData(id)
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  private modalService = inject(NgbModal);
	readonly closeResult = signal('');

	open(content: TemplateRef<any>,rowData: any) {
    this.selectedRow = rowData
    console.log(this.selectedRow)
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult.set(`Closed with: ${result}`);
			},
			(reason) => {
				this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
