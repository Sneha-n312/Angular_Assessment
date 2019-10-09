import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {
employees:Employee[]=[];
id:number=1;
  constructor() { }

  create(e:Employee){
    e.id=this.id;
    ++this.id;
    this.employees.push(e)
  }
}
