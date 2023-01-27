import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(180deg)'
      })),
      // state('active', style({
      //   transform: 'preserve-3d'
      // })),
      state('inactive', style({
        transform: 'rotatex(0)'
      })),
      transition('active => inactive', animate('200ms ease-out')),
      transition('inactive => active', animate('200ms ease-in'))
    ])
  ]
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
}
