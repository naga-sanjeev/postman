import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }
  data:any
  data2:any
  ngOnInit(): void {

        this.data=new Observable(
          function subscribe(obs){
              obs.next('naga');
              obs.next('sanjeev')
          }); 
        this.data.subscribe((re:any)=>
          {console.log(re)})  

          this.data2 = new Observable(function subscribe(sub) {
            sub.next(1);
            sub.next(2);
            sub.next(3);
            sub.complete();
            //any data we wnat to send we should send before complete if we send afterwards that data will not be delivered
            sub.next(4);// Is not delivered because it would violate the contract
      
          });
          this.data2.subscribe((x:any) => console.log(x));
  }
  
}
