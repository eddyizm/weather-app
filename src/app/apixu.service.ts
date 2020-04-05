import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const WEATHER = ''

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(BASE_URL + location + '&units=imperial&appid=' + WEATHER);
  }
}
