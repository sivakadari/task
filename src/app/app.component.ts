import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherServiceService } from './Service/weather-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cityName = "";
  getWeatherResults: any;
  cityErrorMessage: any;
  WeatherData: any;
  normalTemp: any;
  time: any;
  constructor(
    private weatherService: WeatherServiceService,
    private router: Router
  ) {
    this.WeatherData = {
      main: {},
      isDay: true
    };
  }


  ngOnInit(): void {
  }
  getCityWeather() {
    if (this.cityName != "") {
      this.getWeatherResults = "";
      this.weatherService.getWeatherReport(this.cityName).subscribe((getWeather: any) => {
        this.WeatherData = getWeather;
        this.getWeatherResults = getWeather;
        this.time = new Date();
        this.normalTemp = (this.getWeatherResults.main.temp - 273).toFixed(2);
        this.cityName = "";
      }, (err: any) => {
        this.getWeatherResults = "";
        this.cityErrorMessage = this.cityName;
        this.cityName = "";
      });
    } else {
      alert("Please Enter the City Name");
    }
  }

}
