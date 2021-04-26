import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}
  getCovidData() {
    return this.http.get(
      "https://api.covid19india.org/state_district_wise.json"
    );
  }
}
