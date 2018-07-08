import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {
  scale: number = 0;
  rotate: number = 0;
  skewX: number = 0;
  skewY: number = 0;


  getTransform() {
    let scaleStyle = (this.scale > 0 || this.scale < 0) ? `scale(${this.scale})` : '';
    let rotateStyle = (this.rotate > 0 || this.rotate < 0) ? `rotate(${this.rotate}deg)` : '';
    let skewXStyle = (this.skewX > 0 || this.skewX < 0) ? `skewX(${this.skewX}deg)` : '';
    let skewYStyle = (this.skewY > 0 || this.skewY < 0) ? `skewY(${this.skewY}deg)` : '';

    return `${scaleStyle} ${rotateStyle} ${skewXStyle} ${skewYStyle}`;
  }

  ngOnInit() {
  }

}
