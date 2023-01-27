import { HttpBackend, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, catchError, Subject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  url:any
  getdata:any
  public notificationSubject=new Subject<any>();
  public notificationSubject2=new Subject<any>();
  public notificationSubject3=new Subject<any>();
  // public notificationSubject2=new BehaviorSubject("DEmo");
  // public notificationSubject3=new BehaviorSubject("DEmo");
  constructor(private http:HttpClient,private ms:MessageService) { }

  sendNotification(data:any){
    this.notificationSubject.next(data)
    console.log(data);
    this.url=data
  }

  sendNOtifications(data1:any){
    this.notificationSubject2.next(data1)
    console.log(data1);
  }

  sendMethod(data:any){
    this.notificationSubject3.next(data)
  }

  getData()
  {this.getdata=true
    return this.http.get(this.url,{observe:'response'})
  }

  postData(data2:any){
    // console.log(data2);
    return this.http.post(this.url,data2,{observe:'response'});
  }

  // public handleError(error:HttpErrorResponse) {
  //   console.log(error.status);
  //   let errormessage:any
  
  //     if (error.status === 0) {
    
  //       console.error('An error occurred:', error.error);
  //     } else if(error.status === 404) {
      
  //       console.error(" page not found")
  //       errormessage=`${error.status}: page not found `;
  //       // return throwError(() => new Error('Something bad happened; please try again later.'));
  //       console.error(`Backend returned code ${error.status}, body was: `, error.error);
  //       console.error(errormessage)
  //       // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
  //       this.ms.add({key:'tc', severity:'sucess',summary:'sucess',detail:'message content sucess'})
  //       // this.toast.error(errormessage)  
  //       //  this.toast.error({detail:'Error Message',summary:'page not found',duration:2000})
  //       //  this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
  //        this.ms.add({severity:'error',summary:'error',detail:'message content error'})
       
  //     }
  //     // this.toast.error(errormessage)
  
  //   if(error.error instanceof ErrorEvent)
  //   {
  //     errormessage=`an error occured: $(error.error.message)`
  //   }
  //   else
  //   {
  //       if(error.status===404)
  //        {
  //         errormessage=`${error.status}: page not found `;
  //        } 
  //        else
  //        {
  //         errormessage=`something went wrong`
  //        }     
  //   }
  //   // this.toast.error(errormessage)
  //   this.ms.add({severity:'error',summary:'error',detail:'message content error'})
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }
}
