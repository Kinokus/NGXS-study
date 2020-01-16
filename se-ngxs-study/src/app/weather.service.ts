import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetOneDayWeather, OneDayWeather} from '../actions/weather.actions';
import OAuth from 'oauth';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {

    const header = {'X-Yahoo-App-Id': 'your-app-id'};

    const request = new OAuth.OAuth(
      null,
      null,
      'your-consumer-key',
      'your-consumer-secret',
      '1.0',
      null,
      'HMAC-SHA1',
      null,
      header
    );


    request.get(
      'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
      null,
      null,
      function (err, data, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      }
    );


  }
}
