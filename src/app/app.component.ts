import { Component } from '@angular/core';
import {CoviddataService} from './services/coviddata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Array<any>
  totalRecords: Number
  page:Number = 1 
  config: any;
  constructor(private coviddata: CoviddataService){
     this.data = new Array<any>()
  }
     ngOnInit()
     {
     this.coviddata.getData().subscribe((data) =>
     {
      this.data = data
      this.totalRecords = data.length;
      this.config = {
        itemsPerPage: 15,
        currentPage: 1,
        totalItems: this.totalRecords
      };
     }); 
     
     
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  getUsersByCountry(country)
  {
    this.coviddata.getSearch().subscribe((data) =>
    {
        console.log(data);
    });
  }

}
  

