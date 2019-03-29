import { BrowserModule } from '@angular/platform-browser';
import { NgModule,     CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormParserComponent } from './utils/form-parser/form-parser.component';
import { ClientsComponent } from './models/clients/clients.component';
import { UsersComponent } from './models/users/users.component';
import { ClientsService } from './models/clients/clients.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpService } from './globalServices/http.service';
import { TableParserComponent } from './utils/table-parser/table-parser.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
 defineLocale('es', esLocale);
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
 @NgModule({
  declarations: [
    AppComponent,
    FormParserComponent,
    ClientsComponent,
    UsersComponent,
    SidebarComponent,
    TableParserComponent
   ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      toastClass: 'toast toast-bootstrap-compatibility-fix'
    }), // ToastrModule added
    BrowserAnimationsModule, // required animations module
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    NgxPaginationModule,
    BsDatepickerModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [ ClientsService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
