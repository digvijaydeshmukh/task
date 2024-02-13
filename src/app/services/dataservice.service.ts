import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Data {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  expanded: boolean
}

const FRUITS: Data[] = [
  { position: 1, name: 'Apple', weight: 1.0079, symbol: 'H', expanded: false },
  { position: 2, name: 'Avocados	', weight: 4.0026, symbol: 'He', expanded: false },
  { position: 3, name: 'Cranberry', weight: 6.941, symbol: 'Li', expanded: false },
  { position: 4, name: 'Dragonfruit', weight: 9.0122, symbol: 'Be', expanded: false },
  { position: 5, name: 'Coconut', weight: 10.811, symbol: 'B', expanded: false },
  { position: 6, name: 'Cherry', weight: 12.0107, symbol: 'C', expanded: false },
  { position: 7, name: 'Banana', weight: 14.0067, symbol: 'N', expanded: false },
  { position: 8, name: 'Kiwi', weight: 15.9994, symbol: 'O', expanded: false },
  { position: 9, name: 'Mango', weight: 18.9984, symbol: 'F', expanded: false },
  { position: 10, name: 'Guava', weight: 20.1797, symbol: 'Ne', expanded: false },
];

const VEG: Data[] = [
  { position: 1, name: 'Cabbage', weight: 1.0079, symbol: 'H', expanded: false },
  { position: 2, name: 'Spinach	', weight: 4.0026, symbol: 'He', expanded: false },
  { position: 3, name: 'Lettuce', weight: 6.941, symbol: 'Li', expanded: false },
  { position: 4, name: 'Cauliflower', weight: 9.0122, symbol: 'Be', expanded: false },
  { position: 5, name: 'Broccoli', weight: 10.811, symbol: 'B', expanded: false },
  { position: 6, name: 'Garlic', weight: 12.0107, symbol: 'C', expanded: false },
  { position: 7, name: 'Onion', weight: 14.0067, symbol: 'N', expanded: false },
  { position: 8, name: 'Beans', weight: 15.9994, symbol: 'O', expanded: false },
  { position: 9, name: 'Carrot', weight: 18.9984, symbol: 'F', expanded: false },
  { position: 10, name: 'Potatoes', weight: 20.1797, symbol: 'Ne', expanded: false },
];


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  fruitSub: BehaviorSubject<any[]> = new BehaviorSubject<Data[]>([]);
  fruitData = this.fruitSub.asObservable();

  vegSub: BehaviorSubject<any[]> = new BehaviorSubject<Data[]>([]);
  vegData = this.vegSub.asObservable();
  constructor() {
    this.fetchFruitsData();
    this.fetchVegData();
  }

  fetchFruitsData() {
    this.fruitSub.next(FRUITS);
  }

  fetchVegData() {
    this.vegSub.next(VEG);
  }
}
