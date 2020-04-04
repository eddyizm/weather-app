import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// http://api.weatherstack.com/current?access_key=dac0476d1dbd3b280410bd617cbe6d82&query=Fullerton
const BASE_URL = 'http://api.weatherstack.com/current?access_key='
const YOUR_API_KEY = ''

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(BASE_URL + YOUR_API_KEY + '&query=' + location);
  }
}
