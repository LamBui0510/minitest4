import { Component, OnInit } from '@angular/core';
import {Tour} from "../model/Tour";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TourService} from "../service/tour.service";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  tours: Tour[] =[];
  formTour!: FormGroup; // abtract validation
    constructor(private tourService:TourService) {
      this.tours = tourService.tour;
    }
  tour: Tour = new Tour(0, "", 0, "")

  ngOnInit(): void {
    this.formTour = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", Validators.maxLength(5)),
      price: new FormControl(0, Validators.min(10)),
      description: new FormControl("", Validators.maxLength(10)),
    })
  }
  showEdit(tour:Tour){
  this.tour = new Tour(tour.id, tour.name, tour.price, tour.description);
    }
    saveEdit(tour: any){
      this.tourService.create(tour);
    }
    delete(id: number){
      this.tourService.delete(id)
    }
    create(){
      this.tourService.create(this.formTour.value);
    }





}
