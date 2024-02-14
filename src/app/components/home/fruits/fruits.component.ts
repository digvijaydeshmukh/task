import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatTableModule, MatExpansionModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})
export class fruitsComponent implements OnInit {
  @Input() dataSource: any;
  @Input() fruitFlag: any;
  @Input() fruitExFlag: any;
  show = true;


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit(): void {
  }

  openClose() {
    this.show = !this.show;
  }
}
