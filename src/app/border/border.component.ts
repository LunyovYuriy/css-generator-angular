import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css']
})

export class BorderComponent implements OnInit {
  borderStyle: string[] = [
    'solid',
    'dotted',
    'double',
    'dashed',
    'ridge',
    'inset',
    'outset',
    'groove'
  ];
  selectedValue: string = 'solid';
  borderWidth: number = 0;
  borderColor: string = '#000';
  getBorder(style): string {
    return `${this.borderWidth}px ${style} ${this.borderColor}`
  }
  ngOnInit() {
  }


}
