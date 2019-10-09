  
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees:Employee[] = [];

  constructor(private svc:DataService) { }

  ngOnInit() {
    this.employees = this.svc.employees;
  }

}