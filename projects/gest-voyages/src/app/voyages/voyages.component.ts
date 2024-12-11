import { Component, OnInit } from '@angular/core';
import { VOYAGES } from '../mock-voyages';
import { Voyage } from '../voyage';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {
  
  voyages : Voyage[] = [];

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.getVoyages();
  }

  getVoyages(): void {

    this.travelService.listevoyages()
    .subscribe(voyages => this.voyages = voyages);
  }

}
