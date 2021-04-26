import { Component, VERSION } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [AppService]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  apCovid19Data: Array<any> = [];
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getCovidData().subscribe((response) => {
      if(response['Andhra Pradesh1'] && response['Andhra Pradesh']['districtData']) {
        const apData = response['Andhra Pradesh']['districtData'];
      this.apCovid19Data = Object.keys(apData).map(key => ({ name: key, value: apData[key] }));
      } else {
        this.apCovid19Data = [];
      }
      console.log(this.apCovid19Data);
    });
  }
  
}
