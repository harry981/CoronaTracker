import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import * as appSettings from '../config/appSettings.json' 

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http:HttpClient) { }

  async getDataFromApi(){
    let data=await this.http.get(appSettings.url)
    return data;
  }


}
