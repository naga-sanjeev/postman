import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CommonInterceptor } from '../common.interceptor';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-historytab',
  templateUrl: './historytab.component.html',
  styleUrls: ['./historytab.component.css']
})
export class HistorytabComponent implements OnInit {
  history={
    st:null,
    ul:null,
    me:null
  }
  recievedata:any=[]
  recievedata2:any=[]
  recievedata3:any=new Array
  status:any
  url:any
  method:any
  users:any
  x:any

  constructor(private ns:NotificationService) { }
demo:any=[];
  ngOnInit(): void {
      
            this.ns.notificationSubject2.subscribe((d:any)=>{
              console.log(d);
              this.status=d.status
              this.url=d.url  
              this.history.st=d.status
              this.history.ul=d.url      
              // console.log(this.history);
                 
            })

          
        this.ns.notificationSubject3.subscribe((d:any)=>{
              this.method=d
              this.history.me=d
              console.log(this.history);
              // this.gettingValues(this.history)
              localStorage.setItem('data',JSON.stringify(this.history))
              this.users=JSON.parse(localStorage.getItem('data')||'[]')  
              // console.log(this.users);
              this.recievedata.push(this.users)
              console.log(this.recievedata);
           
              localStorage.setItem('recievedata',JSON.stringify(this.recievedata))
             
            })
           
            
            this.recievedata2=JSON.parse(localStorage.getItem('recievedata')||'[]')  
            // console.log(this.recievedata2);
            this.recievedata3=JSON.parse(localStorage.getItem('historytab')||'[]')
            console.log(this.recievedata3);
                
        
            
            // if(this.recievedata3.length>5)
            // {
            //   this.recievedata3.shift()
            //   console.log(this.recievedata3);
            //   console.log(this.recievedata3.length);
            // }
            for(let i=this.recievedata3.length;i>5;i--)
            {
              this.recievedata3.shift();
            }
            console.log(this.recievedata3);
            
            localStorage.setItem('recievedata3',JSON.stringify(this.recievedata3))
            let y=JSON.parse(localStorage.getItem('selectdata')||'[]')
            console.log("firsttime");
            console.log(y);
            

            // this.recievedata3.push(this.recievedata2)
            // console.log(this.recievedata3);
            
            // localStorage.setItem('recievedata2',JSON.stringify(this.recievedata2))
            // this.x=JSON.parse(localStorage.getItem('recievedat2')||'[]')
            // this.recievedata3.push(this.x)
            // console.log(this.recievedata3);
            
            // localStorage.clear()
            
            // this.x=JSON.parse(localStorage.getItem('recievedata')||'[]')  
            // console.log(this.x);
            // this.recievedata2.push(this.x)
            // console.log(this.recievedata2);
          
  }
  getdata(i:any)
  {
    // localStorage.clear( )
    // localStorage.removeItem('selectdata')
    console.log(this.recievedata3[i]);
    localStorage.setItem('selectdata',JSON.stringify(this.recievedata3[i]))
    let x=JSON.parse(localStorage.getItem('selectdata')||'[]')
    console.log(x);
    
    
  }

}
