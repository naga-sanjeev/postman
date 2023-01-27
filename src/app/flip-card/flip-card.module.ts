import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';





@NgModule({
  declarations: [
    FlipCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FlipCardComponent
  ]
})
export class FlipCardModule { }
