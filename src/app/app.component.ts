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
  constructor(private coviddata: CoviddataService){
     this.data = new Array<any>()
  }

  ngOnInit()
  {
    this.coviddata.getData().subscribe((data) => {
      console.log(data);
    })
  }
}
