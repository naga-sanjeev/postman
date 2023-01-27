import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpEventType
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { NgToastService } from 'ng-angular-popup';
import { HandleerrorService } from './handleerror.service';
import {catchError, map} from 'rxjs/operators';
import { HistorytabComponent } from './historytab/historytab.component';
import { PostmanComponent } from './postman/postman.component';
@Injectable()
export class CommonInterceptor implements HttpInterceptor {
 
  token=null
  
  statusobject2={
    stcode:null,
    sturl:null,
    stmethod:''
  };
  data:any=[]
  constructor(private toast:NgToastService,private ms:MessageService,) {}

  public handleError(err:HttpErrorResponse)
      {      
        console.error(err); 
          // this.error.handleError(err)
          console.log(err.status);
          if(err.status===400)
          {
            console.log(err.status);
            let errormessage=`${err.status}: Bad request `;
            // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
            this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
          }
          else  if(err.status===401)
          {
            console.log(err.status);
            let errormessage=`${err.status}: You are unauthorized to do this action `;
            // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
            this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
          }
          else  if(err.status===403)
          {
            console.log(err.status);
            let errormessage=`${err.status}: You don't have permission to access the request resource `;
            // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
            this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
          }
          else  if(err.status===404)
          {
            console.log(err.status);
            let errormessage=`${err.status}: The required resource does not exit`;
            // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
            this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
          }
          else  if(err.status===412)
          {
            console.log(err.status);
            let errormessage=`${err.status}: Precondition failed `;
            // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
            this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
          }
          else  if(err.status===500)
          {
            console.log(err.status);
            let errormessage=`${err.status}: Internal Server Error`;
            // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
            this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
          }
          else  if(err.status===501)
          {
            console.log(err.status);
            let errormessage=`${err.status}: The requested service is not available `;
            // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
            this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
          }
          else  
          {
            console.log(err.status);
            let errormessage=`something went wrong  `;
            // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
            this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
          }
        
         return throwError(()=>new Error('something bad happened'))
      }
    
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request).pipe(map((event: HttpEvent<any>)=>{
    //     if(event instanceof HttpResponse)
    //     {
    //       event =event.clone({body:event.body});
    //     }
    //     return event
    // }));
   
    //   console.log(request);
    
    // return next.handle(request)

  
    
    // return next.handle(request).pipe(
    //   ((res=>{
    //     console.log("passed through the interceptor in response");
    //     console.log(res);
    //     return res
    //             })),
    //   )
              // return next.handle(request).pipe((
              //   (map(res=>{
              //         console.log("passed through the interceptor in response");
              //         console.log(res);
              //         return res
              //             }))),
              //   catchError((error:HttpErrorResponse)=>{
              //     console.log(error);
                  
              //     let errorMsg = '';
              //     let message=""  
              //     if (error.error instanceof ErrorEvent) {
              //           console.log('This is client side error');
              //           errorMsg = `Error: ${error.error.message}`;
              //       } else {
              //           console.log('This is server side error');
              //           errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
              //            message=`${error.status}`
              //            this.token=error.status
              //            console.log(this.token);
              //            localStorage.setItem('token',JSON.stringify(this.token))
              //           this.ms.add({severity:'error',summary:'Error',detail:errorMsg,key:'tc'})
              //       }
              //       console.log(errorMsg);
              //       return throwError(errorMsg);
              //   }))

            
    // return new Observable((observer)=>{
    //   next.handle(request).subscribe(
        
    //     (res:any)=>{
    //       if(res instanceof HttpResponse)
    //       {
    //         observer.next(res)
    //         console.log(res);
    //       }
    //       return response=res
    //     },
    //     (err:HttpErrorResponse)=>{
    //       console.error(err); 
    //       // this.error.handleError(err)
    //       console.log(err.status);
    //       if(err.status===400)
    //       {
    //         console.log(err.status);
    //         let errormessage=`${err.status}: Bad request `;
    //         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
    //         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
    //       }
    //       else  if(err.status===401)
    //       {
    //         console.log(err.status);
    //         let errormessage=`${err.status}: You are unauthorized to do this action `;
    //         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
    //         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
    //       }
    //       else  if(err.status===403)
    //       {
    //         console.log(err.status);
    //         let errormessage=`${err.status}: You don't have permission to access the request resource `;
    //         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
    //         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
    //       }
    //       else  if(err.status===404)
    //       {
    //         console.log(err.status);
    //         let errormessage=`${err.status}: The required resource does not exit`;
    //         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
    //         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
    //       }
    //       else  if(err.status===412)
    //       {
    //         console.log(err.status);
    //         let errormessage=`${err.status}: Precondition failed `;
    //         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
    //         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
    //       }
    //       else  if(err.status===500)
    //       {
    //         console.log(err.status);
    //         let errormessage=`${err.status}: Internal Server Error`;
    //         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
    //         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
    //       }
    //       else  if(err.status===501)
    //       {
    //         console.log(err.status);
    //         let errormessage=`${err.status}: The requested service is not available `;
    //         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
    //         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
    //       }
    //       else  
    //       {
    //         console.log(err.status);
    //         let errormessage=`something went wrong  `;
    //         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
    //         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
    //       }
    //         return error=err
    //     }
    //   );
    // });

    var response:any
    var errors:any

    return new Observable((observer)=>{
      next.handle(request).subscribe(
        (res:any)=>{
                if(res instanceof HttpResponse)
                {
                  observer.next(res)
                  console.log(res);
                }
                return response=res
              },
              error=>{
                      console.error(error); 
                       // this.error.handleError(err)
                       console.log(error.status);
                       if(error.status===400)
                       {
                         console.log(error.status);
                         let errormessage=`${error.status}: Bad request `;
                         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
                       }
                       else  if(error.status===401)
                       {
                         console.log(error.status);
                         let errormessage=`${error.status}: You are unauthorized to do this action `;
                         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
                         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
                       }
                       else  if(error.status===403)
                       {
                         console.log(error.status);
                         let errormessage=`${error.status}: You don't have permission to access the request resource `;
                         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
                         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
                       }
                       else  if(error.status===404)
                       {
                         console.log(error.status);
                         let errormessage=`${error.status}: The required resource does not exit`;
                         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
                           //  this.token=error.status
                           //  console.log(this.token);
                           //  localStorage.setItem('token',JSON.stringify(this.token))
                            this.statusobject2=error.status
                            this.statusobject2=error.url
                            console.log(this.statusobject2);
                            localStorage.setItem('statusobject2',JSON.stringify(this.statusobject2))
                            this.data=JSON.parse(localStorage.getItem('historytab')||'[]')
                            console.log();
                            
                            this.data.push(this.statusobject2)
                            localStorage.setItem('errordata',JSON.stringify(this.statusobject2));
 
                         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
                       }
                       else  if(error.status===412)
                       {
                         console.log(error.status);
                         let errormessage=`${error.status}: Precondition failed `;
                         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
                         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
                       }
                       else  if(error.status===500)
                       {
                         console.log(error.status);
                         let errormessage=`${error.status}: Internal Server Error`;
                         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
                         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
                       }
                       else  if(error.status===501)
                       {
                         console.log(error.status);
                         let errormessage=`${error.status}: The requested service is not available `;
                         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
                         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
                       }
                       else  
                       {
                         console.log(error.status);
                         let errormessage=`something went wrong  `;
                         // this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
                         this.ms.add({severity:'error',summary:'Error',detail:errormessage,key:'tc',life:2000})
                       }
                         return errors=error
                    //  return error
                    }     
      )
    }) 
   

  }
}
