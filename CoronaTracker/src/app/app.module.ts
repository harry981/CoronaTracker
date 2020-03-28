import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FetchDataService} from '../services/fetch-data.service'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
