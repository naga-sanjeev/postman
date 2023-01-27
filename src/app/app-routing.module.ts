import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipComponent } from './flip/flip.component';
import { HistorytabComponent } from './historytab/historytab.component';
import { PostmanComponent } from './postman/postman.component';
import { ProductComponent } from './product/product.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {path:"post",component:PostmanComponent},
  {path:"history",component:HistorytabComponent},
  {path:"product",component:ProductComponent},
  {path:"sample",component:SampleComponent},
  {path:"flip",component:FlipComponent},
  {path:"rxjs",component:RxjsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents=[PostmanComponent,HistorytabComponent]