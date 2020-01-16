/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetOneDayWeather, OneDayWeather} from '../actions/weather.actions';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private city: any;
  private countryCode: any;
  private consumer_key: any;


  constructor(private http: HttpClient) {

  }



  tmpUrl = `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${this.city},${this.countryCode}&format=json`;

  tmpAuthHeader = 'OAuth ' +
    `oauth_consumer_key="${this.consumer_key}",` +
    `oauth_nonce="${Math.random().toString(36).substring(2)}",` +
    `oauth_signature_method="HMAC-SHA1",` +
    `oauth_timestamp="${new Date().getTime() / 1000}",` +
    `oauth_version="1.0",` +
    `oauth_signature="JmnomUHOhGlJ2wD8xxh5uJL4iyo="`;
  tmpHeader = `
  -H 'Connection: keep-alive' 
  -H 'Accept: */*' 
  -H 'Authorization: ' 
   
  -H 'X-Yahoo-App-Id: your-app-id' 
  -H 'Sec-Fetch-Site: cross-site' 
  -H 'Sec-Fetch-Mode: cors' 
  -H 'Accept-Encoding: gzip, deflate, br' 
   
  --compressed`;

}

