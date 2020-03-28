import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FetchDataService} from '../services/fetch-data.service'
import {HttpClientModule} from '@angular/common/http' 

import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
