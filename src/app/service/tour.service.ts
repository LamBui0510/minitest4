import { Injectable } from '@angular/core';
import {Tour} from "../model/Tour";

@Injectable({
  providedIn: 'root'
})
export class TourService {
tour: Tour[] =[
  new Tour(1,"Ha Long", 123, "all"),
  new Tour(2,"Ha Long2", 1232, "all1"),
  new Tour(3,"Ha Long3", 1233, "all2"),
  new Tour(4,"Ha Long4", 1234, "all3"),
];
delete(id: number){
  for (let i = 0; i < this.tour.length; i++) {
    if (id=== this.tour[i].id){
      this.tour.splice(i,1)
    }
  }

}
create(tour: Tour){
let check = true
  for (let i = 0; i < this.tour.length; i++) {
    if (this.tour[i].id=== tour.id){
      this.tour[i] = tour;
      check = false;
    }
  }
  if (check){
    this.tour.push(tour)
  }
}
  constructor() { }
}

