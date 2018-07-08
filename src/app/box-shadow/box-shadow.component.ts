import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-shadow',
  templateUrl: './box-shadow.component.html',
  styleUrls: ['./box-shadow.component.css']
})
export class BoxShadowComponent implements OnInit {

  horLength: number = 0;
  vertLength: number = 0;
  blurRad: number = 0;
  spread: number = 0;
  boxShadowColor: string = '#000';
  selectedInset: string = 'no';

  getBoxShadow(): string {
    if (this.selectedInset === 'no') {
      return `${this.horLength}px ${this.vertLength}px ${this.blurRad}px ${this.spread}px ${this.boxShadowColor}`;
    }
    else {
      return `${this.selectedInset} ${this.horLength}px ${this.vertLength}px ${this.blurRad}px ${this.spread}px ${this.boxShadowColor}`;
    }
  
  }

  ngOnInit() {
  }

}
