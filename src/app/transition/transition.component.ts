import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {
  properties: string[] = [
    'all',
    'background',
    'color',
    'height',
    'width',
    'border'
  ];
  tFunc: string[] = [
    'ease',
    'linear',
    'ease-in',
    'ease-out',
    'ease-in-out'
  ]
  duration: number = 0;
  selectedProp = 'all';
  selectedFunc = 'ease';

  getTransition(): string {
    return `${this.selectedProp} ${this.duration}s ${this.selectedFunc}`;
  }

  ngOnInit() {
  }

}
