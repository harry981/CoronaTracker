import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../services/fetch-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dataService:FetchDataService){
                  
  }

    async ngOnInit() {
  
    let data=await this.dataService.getDataFromApi();
    console.log("Data",data)
  
  }
  

  title = 'CoronaTracker';
}
