import { Component, OnInit } from '@angular/core';
import {  Employee } from '../employee';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id:number;
    name:string;
    address:string;
    dob:number;
    phone:number;
    degree:string;
    marks:number;
    stream:string;
    college:string;
  newEmployee: Employee;
  constructor(private svc: DataService) { }

  ngOnInit() {
  }
  createEmployee() {

    this.newEmployee = new Employee(this.id, this.name, this.address, this.dob,this.phone,this.degree,this.marks,this.stream,this.college)
    console.log(this.newEmployee)
    this.svc.create(this.newEmployee);
  }
}
