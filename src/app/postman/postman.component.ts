import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, ErrorHandler, HostListener, OnInit } from '@angular/core';
// import { ɵgetAllInstancesOf } from '@angular/fire';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { catchError, throwError } from 'rxjs';
import { CommonInterceptor } from '../common.interceptor';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-postman',
  templateUrl: './postman.component.html',
  styleUrls: ['./postman.component.css'],
  providers: [MessageService]
})


export class PostmanComponent implements OnInit {

  methods: any;
  selectedmethod: any
  mobile: any = ""
  newurl: any
  getScreenWidth: any
  getScreenHeight: any
  button: string = ""
  data1: any
  output: boolean = false
  json: boolean = false
  formdata: boolean = false
  postOrder: any
  disable: boolean = true
  values3: any = []
  count = 0
  items: any
  adding: boolean = true
  removing: boolean = false
  mobile2: boolean = false
  mobile3: boolean = false
  mobile4: boolean = false
  rawdata: boolean = true
  previewdata: boolean = false
  footerraw: boolean = false
  footerpreview: boolean = false
  value: any
  data: any
  display = false
  displayfooter: boolean = false
  headform: any
  sendbutton: boolean = false
  getbutton: boolean = false
  postbutton: boolean = false
  jsonform: any
  jsonbutton: boolean = false
  formdatabutton: boolean = false
  body: boolean = false
  postorder2: any
  methods2: any
  count1 = 0
  getheaderurl: boolean = false
  postheaderurl: boolean = false
  formdatadisable: boolean = true
  jsondisable: boolean = false
  button1: string = ""
  formdatavalue = 0
  removeitems = 0
  headbutton = false
  statuscode: number = 0
  historytab: any = new Array
  users: any
  statusobject = {
    stcode: null,
    sturl: null,
    stmethod: ''
  };
  statusobject2 = {
    stcode: null,
    sturl: null,
    stmethod: ''
  };
  token = null
  sucess: any
  historybutton: boolean = false
  sendbutton2: boolean = true
  requiredata: any
  @HostListener('window:resize', ['$event']) onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if (this.getScreenWidth >= 1100) {
      this.headbutton = true
    }

    if (this.getScreenWidth <= 770) {
      this.mobile = false
    }
    else {
      this.mobile = true
    }
    if (this.getScreenWidth <= 680) {

      this.mobile2 = true
    }
    else {
      this.mobile2 = false
    }
    if (this.getScreenWidth <= 600) {
      this.mobile3 = true
      this.footerraw = true
      this.footerpreview = true
    }
    else {
      this.mobile3 = false
      this.footerraw = false
      this.footerpreview = false
    }
    if (this.getScreenWidth <= 525) {
      this.mobile4 = true
    }
    else {
      this.mobile4 = false
    }

    if (this.getScreenWidth <= 1200) {
      this.historybutton = true
      this.sendbutton2 = false
    }
    else {
      this.historybutton = false
      this.sendbutton2 = true
    }
  }


  constructor(private fb: FormBuilder, private http: HttpClient, private ms: MessageService, private toast: NgToastService, private route: Router, private ns: NotificationService,) { }

  ngOnInit(): void {
    // localStorage.clear()

    this.methods = [
      { name: 'Get' },
      { name: 'Post' },
      { name: 'Delete' }
    ]

    this.methods2 = [
      { name: 'form-data' },
      { name: 'JSON' }
    ]

    this.getScreenHeight = window.innerHeight
    this.getScreenWidth = window.innerWidth
    if (this.getScreenWidth <= 770) {
      this.mobile = false
    }
    else {
      this.mobile = true

    }
    //form array with form group getting the key and value fields at the begging
    // this.postOrder=this.fb.group({
    //   key:'',
    //   value:'',
    //   items:new FormArray([
    //     this.fb.group({
    //       'key':new FormControl(''),
    //       'value':new FormControl('')
    //     })
    //     // new FormControl('userid'),
    //     // new FormControl('12')
    //   ])
    // })
    this.postOrder = this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
      items: new FormArray([

      ])
    })

    this.headform = this.fb.group({
      newurl1: ['', Validators.required],
      dropdoun: ['']
    })
    // this.countryForm.controls['country'].setValue(this.default, {onlySelf: true}); to give the dropdown value by default
    // localStorage.setItem('selectdata', JSON.stringify(this.statusobject))
    this.requiredata = JSON.parse(localStorage.getItem('selectdata') || '[]')
    console.log(this.requiredata);
    let url2 = this.requiredata.sturl
    let me = this.requiredata.stmethod
    // this.onChange()

    this.headform.patchValue({
      newurl1: url2,
      dropdoun: me
    })
    console.log(this.headform.get('dropdoun').value);
    this.selectedmethod = this.headform.get('dropdoun').value
    console.log(this.selectedmethod);

    localStorage.removeItem('selectdata')

    this.jsonform = this.fb.group({
      jsondata: ['', Validators.required]
    })

    this.postorder2 = this.fb.group({
      orderformjson: ['', Validators.required],
    })
    this.sendbutton = true
    this.getbutton = true
    this.postbutton = false
    this.getheaderurl = true
    // this.selectedmethod='Get'
    //     if(this.selectedmethod=='Get')
    // {
    //   this.sendbutton=true
    //   this.getbutton=true
    //   this.postbutton=false
    //   this.getheaderurl=true
    // }
    console.log(this.historytab);
    this.historytab = JSON.parse(localStorage.getItem('recievedata3') || '[]')
    console.log(this.historytab);
  }

  // form array with form group getting the key and value fields at the begging
  get item(): FormArray {
    return this.postOrder.get('items') as FormArray;
  }

  getvalues() {
    this.newurl = this.headform.get('newurl1').value
    var a: any = []
    a = this.postOrder.value

  }

  add() {


    let a = this.postOrder.get('key').value
    let b = this.postOrder.get('value').value
    let c: any
    c = this.postOrder.get('items').value
    // c=this.postOrder.get(['items',this.count1]).value
    // console.log(c[this.count1]);

    // if(a!='' && b!=''  )
    // {
    //   let item=this.postOrder.get('items') as FormArray;
    //   let newitem=this.fb.group({
    //     'key':['',Validators.required],
    //     'value':['',Validators.required]
    //   })
    //   item.push(newitem)
    // }

    // this.count1++

    let item = this.postOrder.get('items') as FormArray;
    let newitem = this.fb.group({
      'key': ['', Validators.required],
      'value': ['', Validators.required]
    })
    item.push(newitem)
    this.disable = true
    this.removeitems++
  }

  remove(i: any) {
    this.removing = true
    let arr = this.postOrder.get('items') as FormArray;
    arr.removeAt(i)
  }

  onChange() {


    // console.log("form: "+this.headform.get('dropdoun').value);
    //  this.selectedmethod.name='Get'
    this.selectedmethod = this.headform.get('dropdoun').value
    //  this.selectedmethod.name=='Get'
    console.log(this.selectedmethod);
    if (this.selectedmethod == "Post") {
      // console.log(this.selectedmethod);
      this.body = true
      this.display = true
      this.sendbutton = true
      this.getbutton = false
      this.postbutton = true
      // console.log(this.button);
      this.postheaderurl = true
      this.getheaderurl = false
      this.button1 = ""
      this.formdata = false
      this.json = false
      this.postOrder.reset()
      this.postOrder.controls.items.clear()
      this.jsonform.reset()
    }
    else {
      this.body = false
      this.sendbutton = true
      this.getbutton = true
      this.postbutton = false
      // this.headform.reset()
      // this.postOrder.reset()
      this.getheaderurl = true
      this.postheaderurl = false
    }
    this.output = false;
    this.data = ""
    this.value = ""
  }

  // send1(d:any)
  // {
  //   this.ns.sendNotification(d.value)
  // }

  send() {


    this.newurl = this.headform.get('newurl1').value;
    this.ns.sendNotification(this.newurl)
    this.ns.getData();
    // console.log(this.output);


    var jobject: any = {};
    if (this.selectedmethod.name == "Get" || this.selectedmethod == 'Get' && this.newurl != "") {


      this.button = "Raw"
      this.statusobject.stmethod = this.selectedmethod.name

      this.ns.getData().subscribe((x: any) => {
        console.log(x);

        if (x.status == 200 || x.status == 201 || x.status == 202) {
          console.log("service getdata");

          console.log(x);
          // let a=JSON.stringify(x.status)
          // console.log(a);
          this.sucess = x.status
          this.statusobject['stcode'] = x.status
          this.statusobject.sturl = this.newurl

          console.log(this.statusobject);
          localStorage.setItem('statusobject', JSON.stringify(this.statusobject))
          this.users = JSON.parse(localStorage.getItem('statusobject') || '[]')
          this.historytab.push(this.users)
          // localStorage.setItem('historytab',JSON.stringify(this.historytab))
          console.log("history tab:");
          console.log(this.historytab);
          localStorage.setItem('historytab', JSON.stringify(this.historytab))


          this.output = true
          this.displayfooter = true
          this.data = ""
          this.value = ""
          this.statuscode = x.status
          this.value = x.body;
          console.log(this.selectedmethod);

          this.ns.sendNOtifications(x)
          this.ns.sendMethod("Get")
          // console.log(this.value);

          // this.value=JSON.stringify(x.body)
          this.data = JSON.stringify(x.body)
        }
        else {


        }
      })




      //   this.getData().subscribe((x:any)=>{
      //     // this.ms.add({severity:'sucess',summary:'Sucess',detail:'Sucessfully entered URL properly',key:'tc',life:2000})
      //     // console.log(x.status);


      //     if(x.status==200 || x.status==201 || x.status==202)
      //     {
      //       console.log(x);
      //       let a=JSON.stringify(x.status)
      //       console.log(a);
      //       this.statusobject['stcode']=a
      //       this.statusobject.sturl=this.newurl
      //       this.statusobject.stmethod="Get"
      //       console.log(this.statusobject);
      //       this.historytab.push(a,this.newurl,"Get")
      //       console.log(this.historytab);


      //       this.output=true
      //       this.displayfooter=true
      //       this.data=""
      //       this.value=""
      //       this.statuscode=x.status
      //       this.value=x.body;
      //       // console.log(this.value);

      //       // this.value=JSON.stringify(x.body)
      //       this.data=JSON.stringify(x.body )
      //     } 
      // })
      this.output = false


      // this.statusobject2.stmethod="Get"
      // this.token=JSON.parse(localStorage.getItem('token')||'[]')
      // console.log(this.token);
      // console.log(typeof(this.token));
      // console.log(this.newurl);
      // this.statusobject2.stcode=this.token
      // this.statusobject2.sturl=this.newurl
      // console.log(this.statusobject2);
      // localStorage.setItem('statusobject2',JSON.stringify(this.statusobject2))
      // this.users=JSON.parse(localStorage.getItem('statusobject')||'[]')
      // this.historytab.push(this.statusobject2)
      //  // localStorage.setItem('historytab',JSON.stringify(this.historytab))
      // console.log("history tab:");
      // console.log(this.historytab);
      // localStorage.setItem('historytab',JSON.stringify(this.historytab))



    }
    else if (this.selectedmethod.name == "Post" && this.newurl != "") {

      if (this.button1 != '') {
        // console.log(this.button);

        // console.log(this.selectedmethod);
        let a: any = this.postOrder.get('key').value;
        // console.log(a);

        let b: any = this.postOrder.get('value').value
        // console.log(b);
        var keyvalue1: boolean = true
        var keyvalue2: boolean = true

        if ((a == "" && b == "") || (a == '' && b != '') || (a != '' && b == '')) {

          this.output = false
          keyvalue1 = false
        }
        else {
          jobject[a] = b
        }

        for (let ad of this.item.controls) {
          if (this.button1 == 'form-data') {

            this.values3 = Object.values(this.postOrder.get(['items', this.count]).value)
            // this.values3=this.postOrder.get(['items',this.count]).value
            // console.log(this.values3);

            // if( (this.values3[0]=='' && this.values3[1]=='') ||(this.values3[0]!=''||this.values3[1]=='') ||(this.values3[0]==''||this.values3[1]!='') )
            if (this.values3[0] != '' && this.values3[1] != '') {
              var c: any = this.values3[0]
              var d: any = this.values3[1]
              jobject[c] = d;
              this.count++
              this.formdatavalue++
              // this.formdatadisable=true

            }
            else {

              this.output = false
              keyvalue2 = false
            }
          }

        }
        // console.log(jobject);


        this.data1 = this.jsonform.get('jsondata').value
        // console.log(this.data1);


        if (this.button1 == 'form-data') {
          // console.log(keyvalue2+" "+keyvalue1);
          // console.log(jobject);
          console.log(keyvalue2);

          if (keyvalue1 == true || keyvalue2 == true) {
            //  this.value=jobject

            this.ns.postData(jobject).subscribe((x: any) => {
              if (x.status == 200) {
                // console.log(JSON.stringify(x));
                this.output = true
                this.button = 'Raw'
                this.displayfooter = true
                this.statuscode = x.status
                this.value = jobject
                this.count = 0
                this.data = JSON.stringify(x.body)
                this.ns.sendNOtifications(x)
                this.ns.sendMethod('Post')

                this.statusobject.stcode = x.status
                this.statusobject.sturl = x.url
                this.statusobject.stmethod = this.selectedmethod.name
                // console.log(this.selectedmethod.name);
                console.log(this.statusobject);
                localStorage.setItem('statusobject', JSON.stringify(this.statusobject))
                this.users = JSON.parse(localStorage.getItem('statusobject') || '[]')
                this.historytab.push(this.users)
                console.log("history tab: ");
                console.log(this.historytab);
                localStorage.setItem('historytab', JSON.stringify(this.historytab))
              }
            })

            // this.postData(jobject).subscribe((x:any)=>{
            //   if(x.status==200)
            //   {
            //     // console.log(x);
            //     this.output=true
            //     this.button='Raw'
            //     this.displayfooter=true
            //     this.statuscode=x.status
            //     this.value=jobject
            //     this.count=0 
            //     this.data=JSON.stringify(x.body)

            //     this.statusobject.stcode=x.status
            //     this.statusobject.sturl=x.url
            //     this.statusobject.stmethod="Post"
            //     console.log(this.statusobject);
            //     this.historytab.push(this.statusobject)
            //     console.log(this.historytab);
            //   }
            //   })
            this.output = false
            this.count = 0
            // this.postOrder.reset();
            // this.postOrder.controls.items.clear();
            // this.json=false
            // this.formdata=false
            // this.display=false
          }


        }
        else {

          // console.log(a1);
          if (this.data1 == " ") {
            this.output = false

          }
          else {
            var a1 = this.isJsonObject(this.data1)
            if (a1 == true) {

              // console.log(this.button);
              // console.log(this.data1);
              // this.value=JSON.parse(this.data1)
              // console.log(this.value);

              this.ns.postData(this.data1).subscribe((x: any) => {
                this.output = true
                this.displayfooter = true
                this.button = 'Raw'
                this.statuscode = x.status
                console.log(x.body);
                this.value = x.body
                this.data = JSON.stringify(x.body)
                this.ns.sendNOtifications(x)
                this.ns.sendMethod('Post')
                this.statusobject.stcode = x.status
                this.statusobject.sturl = x.url
                this.statusobject.stmethod = this.selectedmethod.name
                console.log(this.statusobject);
                localStorage.setItem('statusobject', JSON.stringify(this.statusobject))
                this.users = JSON.parse(localStorage.getItem('statusobject') || '[]')
                this.historytab.push(this.users)
                console.log("history tab:");
                console.log(this.historytab);
                localStorage.setItem('historytab', JSON.stringify(this.historytab))
              })

              // this.postData(this.data1).subscribe((x:any)=>{
              //   // this.data=x;
              //   this.output=true
              // this.displayfooter=true
              // this.button='Raw'
              //   this.statuscode=x.status
              //   console.log(x.body);
              //   this.value=x.body
              //   this.data=JSON.stringify(x.body)
              //   this.statusobject.stcode=x.status
              //   this.statusobject.sturl=x.url
              //   this.statusobject.stmethod="Post"
              //   console.log(this.statusobject);
              //   this.historytab.push(this.statusobject)
              //   console.log(this.historytab);
              // })

              this.output = false


            }
            else {
              this.output = false
              // this.toast.error({detail:'Error Message',summary:'JSON data is required',duration:2000})
              this.ms.add({ key: 'tf', severity: 'error', summary: 'Error', detail: 'JSON data is required', life: 2000 })
            }
          }


        }

      }
    }
    else if (this.selectedmethod.name == "Get" || this.selectedmethod == "Get" && this.newurl == "") {
      // this.toast.error({detail:'Error Message',summary:'URL is required',duration:2000})
      //  console.log("aai");

    }
    // console.log("calling send method");

    // this.ms.add({severity:'error', summary: 'Error', detail: 'Enter URL'});

    // this.token=JSON.parse(localStorage.getItem('token')||'[]')
    // console.log(JSON.parse(localStorage.getItem('token')||'[]'));      


    console.log("hello send");


  }


  isJsonObject(strData: any) {
    try {
      JSON.parse(strData);
    } catch (e) {
      return false;
    }
    return true;
  }



  onItemChange1() {
    //  this.button=this.postorder2.get('orderformjson').value
    if (this.button1 == "JSON") {

      console.log(this.button1);
      this.json = true;
      this.formdata = false;
      this.data = ""
      this.value = ""
      this.data1 = ""
      this.output = false
      this.postOrder.reset();
      this.postOrder.controls.items.clear();

      this.formdatadisable = false
      this.jsondisable = true
      console.log(this.jsondisable);

    }
    else {
      // this.jsondisable=false
      this.formdatadisable = true
      this.jsondisable = false
      console.log(this.button1);
      this.formdata = true;
      this.json = false;
      this.data = ""
      this.value = ""
      this.output = false
      this.jsonform.reset();

      // this.reset1();
    }
  }

  onItemChange() {

    if (this.button == "Raw") {
      console.log(this.button);

      this.rawdata = true
      this.previewdata = false
    }
    else {
      console.log(this.button);
      this.previewdata = true
      this.rawdata = false
    }

  }


  // getData(){
  //   return this.http.get(this.newurl,{observe: 'response'}).pipe(catchError(this.handleError))
  //   // return this.http.get(this.newurl,{observe:'response'})
  //   // return this.http.get(this.newurl)
  // }

  // postData(data2:any){
  //   // console.log(data2);
  //   return this.http.post(this.newurl,data2,{observe:'response'});
  // }



  // public handleError(error: HttpErrorResponse) {
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
  //       this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
  //       this.ms.add({key:'tc', severity:'sucess',summary:'sucess',detail:'message content sucess'})
  //       this.toast.error(errormessage)  
  //        this.toast.error({detail:'Error Message',summary:'page not found',duration:2000})
  //        this.toast.error({detail:'Error Message',summary:errormessage,duration:2000})
  //        this.ms.add({severity:'error',summary:'error',detail:'message content error'})

  //     }
  //     this.toast.error(errormessage)

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
  //   this.toast.error(errormessage)
  //   this.ms.add({severity:'error',summary:'error',detail:'message content error'})
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }




}
