import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class HandleerrorService {

  constructor(err:HttpErrorResponse, private ms:MessageService) { }

    public handleError(err:HttpErrorResponse)
    {
      let errormessage:string
      if(err.error instanceof ErrorEvent)
      {
        errormessage=`an error occured: ${err.error.message}`
      }
      else
      {
        errormessage=`something went wrong`
      }
      console.error(errormessage)
      
      // this.ms.add({key:'tc', severity:'sucess',summary:'sucess',detail:'message content sucess'})
    }

}
