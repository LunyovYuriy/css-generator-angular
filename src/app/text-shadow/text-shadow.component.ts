import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-shadow',
  templateUrl: './text-shadow.component.html',
  styleUrls: ['./text-shadow.component.css']
})
export class TextShadowComponent implements OnInit {
  horLength: number = 0;
  vertLength: number = 0;
  blurRad: number = 0;
  shadowColor: string = '#000';

  getTextShadow() {
    return `${this.horLength}px ${this.vertLength}px ${this.blurRad}px ${this.shadowColor}`
  }

  ngOnInit() {
  }

}
