import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: Employee;
  empId:number;

  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.empId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.employees.forEach(element => {
      if(element.id == this.empId){
        this.employee = element;
      }
    });
  }

  editEmployee() {
    this.svc.employees[this.svc.employees.indexOf(this.employee)] = this.employee;
  }

}