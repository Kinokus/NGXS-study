/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetOneDayWeather, OneDayWeather} from '../actions/weather.actions';
import {concat} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private city: any;
  private countryCode: any;
  private consumer_key: any;
  private consumer_secret: string;
  private concat = '&';
  private method = 'GET';
  private tmpUrl = `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${this.city},${this.countryCode}&format=json`;
  private composite_key = encodeURIComponent(this.consumer_secret) + this.concat;


  private oauth = {
    'oauth_consumer_key': this.consumer_key,
    'oauth_nonce': Math.random().toString(36).substring(2),
    'oauth_signature_method': 'HMAC-SHA1',
    'oauth_timestamp': new Date().getTime() / 1000,
    'oauth_version': '1.0'
  };



  merged_arr = Object.keys(this.oauth).sort().map(k =>{
    return [k + '=' + encodeURIComponent(this.oauth[k])];
  });


  private signature_base_str = this.method + concat + encodeURIComponent(this.tmpUrl)  + concat + encodeURIComponent(this.merged_arr.join(concat));


  private hash = CryptoJS.HmacSHA1(this.signature_base_str, this.composite_key);
  private signature = this.hash.toString(CryptoJS.enc.Base64);


  tmpAuthHeader = 'OAuth ' +
    `oauth_consumer_key="${this.oauth.oauth_consumer_key}",` +
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
  constructor(private http: HttpClient) {

  }

}

