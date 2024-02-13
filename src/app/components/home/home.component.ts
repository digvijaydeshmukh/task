import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { fruitsComponent } from './fruits/fruits.component';
import { CommonModule } from '@angular/common';
import { Data, DataserviceService } from '../../services/dataservice.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { VegComponent } from './veg/veg.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatExpansionModule, VegComponent,fruitsComponent, CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  providers: [DataserviceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  fruitFlag = false;
  vegetablesFlag = false;
  fruitExFlag = false;
  vegExFlag = false;

  fruitData: Data[] = []
  vegData: Data[] = []

  constructor(private dataserviceService: DataserviceService) { }

  fruitsClick() {
    this.dataserviceService.fruitData.subscribe(el => this.fruitData = el)
    if (this.fruitFlag == true && this.vegetablesFlag == true) {
      this.fruitFlag = false;
      this.vegetablesFlag = true
    } else if (this.fruitFlag == true && this.vegetablesFlag == false) {
      this.fruitFlag = !this.fruitFlag
    } else {
      this.fruitFlag = true
    }
    this.fruitExFlag = false;
    this.vegExFlag = false;
  }

  vegetablesClick() {
    this.dataserviceService.vegData.subscribe(el => this.vegData = el)
    if (this.vegetablesFlag == true && this.fruitFlag == true) {
      this.fruitFlag = true;
      this.vegetablesFlag = false
    } else if (this.vegetablesFlag == true && this.fruitFlag == false) {
      this.vegetablesFlag = !this.vegetablesFlag
    } else {
      this.vegetablesFlag = true
    }
    this.fruitExFlag = false;
    this.vegExFlag = false;

  }

  fruitsExpansion() {
    this.dataserviceService.fruitData.subscribe(el => this.fruitData = el)
    if (this.fruitExFlag == true && this.vegExFlag == true) {
      this.fruitExFlag = false;
      this.vegExFlag = true
    } else if (this.fruitExFlag == true && this.vegExFlag == false) {
      this.fruitExFlag = !this.fruitExFlag
    } else {
      this.fruitExFlag = true
    }
    this.vegetablesFlag = false;
    this.fruitFlag = false;
  }

  vegExpansion() {
    this.dataserviceService.vegData.subscribe(el => this.vegData = el)
    if (this.fruitExFlag == true && this.vegExFlag == true) {
      this.fruitExFlag = true;
      this.vegExFlag = false
    } else if (this.fruitExFlag == false && this.vegExFlag == true) {
      this.vegExFlag = !this.vegExFlag
    } else {
      this.vegExFlag = true
    }
    this.vegetablesFlag = false;
    this.fruitFlag = false;
  }

}
