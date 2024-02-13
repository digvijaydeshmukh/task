import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-veg',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatTableModule],
  templateUrl: './veg.component.html',
  styleUrl: './veg.component.scss'
})
export class VegComponent {
  @Input() dataSource: any;
  @Input() vegetablesFlag: any;
  @Input() vegExFlag: any
  show = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  openClose() {
    this.show = !this.show
  }
}
