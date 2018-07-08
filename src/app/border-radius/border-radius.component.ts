import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-radius',
  templateUrl: './border-radius.component.html',
  styleUrls: ['./border-radius.component.css']
})
export class BorderRadiusComponent implements OnInit {
  topLeft:number = 0;
  topRight:number = 0;
  bottomLeft:number = 0;
  bottomRight:number = 0;

  getBorderRadius() {
    if (!this.topRight && !this.bottomRight && !this.bottomLeft) {
      return `${this.topLeft}px`;
    }
    else {
      return `${this.topLeft}px ${this.topRight}px ${this.bottomRight}px ${this.bottomLeft}px`;
    }
  }

  ngOnInit() {
  }

}
