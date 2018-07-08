import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.css']
})
export class OutlineComponent implements OnInit {
  outlineThickness: number = 0;
  outlineStyle: string[] = [
    'dotted',
    'dashed',
    'solid',
    'groove',
    'ridge',
    'inset',
    'outset',
    'double',
    'auto'
  ];
  outlineColor: string = '#000';
  outlineOffset: number = 0;
  selectedStyle: string = 'dotted';

  getOutline(selected: string):string {
    return `${this.outlineThickness}px ${selected} ${this.outlineColor}`
  }

  ngOnInit() {
  }

}
