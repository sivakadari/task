import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getWeatherReport(city: any): any {
    var API_Key = "4e66c10a41463b12ca0fa2a1f153c746"
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_Key;
    
    return this.httpClient.get(url);
  }
}