import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  book:Employee;

  constructor(private svc:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.book = this.svc.employees[parseInt(this.route.snapshot.paramMap.get('id')) - 1];
  }

  deleteBook(){
    this.svc.employees.splice(this.svc.employees.indexOf(this.book), 1);
  }

}