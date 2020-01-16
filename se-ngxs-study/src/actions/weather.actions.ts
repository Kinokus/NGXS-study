

export class OneDayWeather {

}

export class GetOneDayWeather {
  static readonly type = '[OneDayWeather] Add';

  constructor(public payload: OneDayWeather) {
  }
}
