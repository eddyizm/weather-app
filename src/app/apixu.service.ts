import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// current?access_key=dac0476d1dbd3b280410bd617cbe6d82&query=New York
const BASE_URL = 'http://api.weatherstack.com/'
const YOUR_API_KEY = ''


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(BASE_URL + 'current?access_key=' + YOUR_API_KEY + '&query=' + location);
  }
}
