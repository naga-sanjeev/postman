import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostmanComponent } from './postman/postman.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {NgToastModule} from 'ng-angular-popup'
import { CommonInterceptor } from './common.interceptor';
import { MessageService } from 'primeng/api';
import { HistorytabComponent } from './historytab/historytab.component';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import { NotificationService } from './notification.service';
import { ProductComponent } from './product/product.component';
import { SampleComponent } from './sample/sample.component';
import { FlipCardModule } from './flip-card/flip-card.module';
import { FlipComponent } from './flip/flip.component';
import { CustomdirectiveDirective } from './CustomDirective/customdirective.directive';
import { Customdirective2Directive } from './CustomDirective/customdirective2.directive';
import { RxjsComponent } from './rxjs/rxjs.component';
@NgModule({
  declarations: [
    AppComponent,
    PostmanComponent,
    HistorytabComponent,
    ProductComponent,
    SampleComponent,
    FlipComponent,
    CustomdirectiveDirective,
    Customdirective2Directive,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    InputTextareaModule,
    HttpClientModule,
    ToastModule,
    RippleModule,
    MessageModule,
    MessagesModule,
    NgToastModule,
    FormsModule,   
    TableModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    FlipCardModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CommonInterceptor,
    multi:true,
  },MessageService,
  NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
