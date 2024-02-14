import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../model/data';
import { FRUITS } from '../constant/fruits'
import { VEG } from '../constant/veg';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  fruits = FRUITS;
  veg = VEG;
  fruitSub: BehaviorSubject<any[]> = new BehaviorSubject<Data[]>([]);
  fruitData = this.fruitSub.asObservable();

  vegSub: BehaviorSubject<any[]> = new BehaviorSubject<Data[]>([]);
  vegData = this.vegSub.asObservable();
  constructor() {
    this.fetchFruitsData();
    this.fetchVegData();
  }

  fetchFruitsData() {
    this.fruitSub.next(this.fruits);
  }

  fetchVegData() {
    this.vegSub.next(this.veg);
  }
}
